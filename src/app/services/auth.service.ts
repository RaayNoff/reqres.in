import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ILoginResponse } from '../models/loginResponse';
import { IRegisterResponse } from '../models/registerResponse';
import { IResourcesResponse } from '../models/resourcesResponse';
import { IAuthUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = '';

  login(user: IAuthUser): Observable<ILoginResponse> {
    return this.http
      .post<ILoginResponse>('https://reqres.in/api/login', {
        email: user.email,
        password: user.password,
      })
      .pipe(
        tap(({ token }) => {
          localStorage.setItem('auth-token', token);
          this.setToken(token);
        })
      );
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('auth-token') !== null;
  }

  logout() {
    this.setToken('');
    localStorage.clear();
  }

  register(user: IAuthUser): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>('https://reqres.in/api/register', {
      email: user.email,
      password: user.password,
    });
  }

  constructor(private http: HttpClient) {}
}
