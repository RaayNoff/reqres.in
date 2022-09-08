import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAll().subscribe();
  }
}
