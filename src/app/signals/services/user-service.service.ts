import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User, UserResponse } from '../interfaces/user-info.interfaces';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private httpClient = inject(HttpClient);

  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<UserResponse>(`${this.baseUrl}/${id}`).pipe(
      map((response) => response.data),
      tap(console.log)
    );
  }
}
