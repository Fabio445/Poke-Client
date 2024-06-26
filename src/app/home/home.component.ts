import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadRandomPokemons();
  }

  loadRandomPokemons() {
    this.pokemonService.getRandomPokemons().subscribe((data: any[]) => {
      this.pokemons = data; // Assicurati di mostrare solo 10 Pokémon
    }, (error) => {
      console.error('Failed to load Pokémon:', error);
    });
  }
}
