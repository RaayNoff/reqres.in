import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ITextEditorData } from 'src/app/models/textEditorData';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  @Input() user: IUser;
  @Input() data: string;
  @Input() dataTitle: string;
  @Input() property: string;

  dataControl: FormControl;

  ngOnInit(): void {
    this.dataControl = new FormControl(this.data);
  }

  isOpened$ = new BehaviorSubject<boolean>(false);

  toggleEdit(e: Event) {
    this.isOpened$.next(!this.isOpened$.value);
  }

  completeHandler(e: Event) {
    this.toggleEdit(e);
    this.usersService.changeUser({
      ...this.user,
      [this.property]: this.dataControl.value,
    });
    this.data = this.dataControl.value;
  }
}
