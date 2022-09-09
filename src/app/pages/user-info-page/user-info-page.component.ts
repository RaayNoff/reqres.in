import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss'],
})
export class UserInfoPageComponent implements OnInit, OnDestroy {
  @Input() user: IUser;
  aSub: Subscription;

  constructor(public usersService: UsersService, private router: Router) {}

  ngOnDestroy(): void {
    if (this.aSub) this.aSub.unsubscribe();
  }

  ngOnInit(): void {
    const userId = Number(this.router.url.match(/\d+/gi));

    this.aSub = this.usersService.fetchUser(userId).subscribe((response) => {
      this.user = response.data;
    });
  }
}
