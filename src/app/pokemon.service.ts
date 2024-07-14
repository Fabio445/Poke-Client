import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'http://localhost:3000/api/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getRandomPokemon(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/random`);
  }

  getRandomPokemons(): Observable<any> {
    return this.http.get(`${this.baseUrl}/randoms`);
  }
}
