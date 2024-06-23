import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  signUp(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, { username, password });
  }

  signIn(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signin`, { username, password });
  }
}
