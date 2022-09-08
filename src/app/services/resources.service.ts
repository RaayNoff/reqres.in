import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { IResource } from '../models/resource';
import { IResourcesResponse } from '../models/resourcesResponse';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor(private http: HttpClient) {}

  isLoading = false;

  resources: IResource[] = [];
  response: IResourcesResponse;

  getAll(): Observable<IResourcesResponse> {
    this.isLoading = true;
    return this.http
      .get<IResourcesResponse>('https://reqres.in/api/unknown')
      .pipe(
        delay(1000),
        tap((response) => {
          this.response = response;
          this.resources = response.data;
          this.isLoading = false;
        })
      );
  }
}
