import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api'; // Impostare l'URL del backend appropriato

  constructor(private http: HttpClient) {}

  signUp(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, { username, password });
  }

  signIn(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signin`, { username, password });
  }
}
