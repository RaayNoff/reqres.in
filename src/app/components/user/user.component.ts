import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: IUser;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  delete($event: Event) {
    $event.stopPropagation();
    this.usersService.deleteUser(this.user.id);
  }

  redirectToInfo() {
    this.router.navigateByUrl(`users/${this.user.id}`);
  }
}
