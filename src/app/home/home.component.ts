import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];
  paginatedPokemons: any[ ]= [];
  totalPokemons = 0;
  currentPage = 1;
  pokemonsPerPage = 10;
  totalPages = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((data: any[]) => {
      this.pokemons = data;
      this.totalPokemons = data.length;
      this.totalPages = Math.ceil(this.totalPokemons / this.pokemonsPerPage);
      this.updatePaginatedPokemons();
    });
  }

  updatePaginatedPokemons() {
    const startIndex = (this.currentPage - 1) * this.pokemonsPerPage;
    const endIndex = startIndex + this.pokemonsPerPage;
    this.paginatedPokemons = this.pokemons.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedPokemons();
  }
}
