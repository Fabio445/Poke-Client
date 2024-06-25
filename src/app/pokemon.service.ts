import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'http://localhost:3000/api/pokemon'; // Assicurati che l'URL sia corretto

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
