import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss'],
})
export class UserInfoPageComponent implements OnInit {
  @Input() user: IUser;

  constructor(public usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    const userId = Number(this.router.url.match(/\d+/gi));

    this.usersService.fetchUser(userId).subscribe((response) => {
      this.user = response.data;
    });
  }
}
