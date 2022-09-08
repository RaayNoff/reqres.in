import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, delay, Observable, of, tap, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { IUsersResponse } from '../models/usersResponse';
import { IUserResponse } from '../models/userResponse';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  users: IUser[] = [];
  isLoading = false;

  response: IUsersResponse;

  getAll(): Observable<IUsersResponse> {
    this.isLoading = true;
    return this.http
      .get<IUsersResponse>('https://reqres.in/api/users', {
        params: new HttpParams({
          fromObject: {
            page: 2,
          },
        }),
      })
      .pipe(
        tap((data) => {
          this.response = data;

          this.users = data.data;

          this.isLoading = false;
        })
      );
  }

  deleteUser(id: number) {
    return this.http
      .delete<void>(`https://reqres.in/api/users/${id}`)
      .subscribe(() => {
        this.users = this.users.filter((user) => user.id !== id);
      });
  }
  fetchUser(id: number): Observable<IUserResponse> {
    this.isLoading = true;
    return this.http
      .get<IUserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1000),
        tap(() => {
          this.isLoading = false;
        }),
        catchError(this.errorHandler.bind(this))
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.isLoading = false;
    return throwError(() => error.message);
  }

  changeUser({ id, avatar, email, first_name, last_name }: IUser) {
    return this.http
      .put<IUserResponse>(`https://reqres.in/api/users/${id}`, {
        avatar: avatar,
        first_name: first_name,
        last_name: last_name,
        email: email,
      })
      .subscribe((response) => {
        const newUser = response.data;
        this.users.forEach((user) => {
          if (newUser && newUser.id === user.id) {
            user = {
              ...response.data,
            };
          }
        });
      });
  }
}
