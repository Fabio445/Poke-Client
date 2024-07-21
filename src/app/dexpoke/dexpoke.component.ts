import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dexpoke',
  templateUrl: './dexpoke.component.html',
  styleUrls: ['./dexpoke.component.css']
})
export class DexPokeComponent implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  searchTerm: string = '';
  selectedPokemon: any = null;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data;
      this.filteredPokemons = data;
    });
  }

  filterPokemons() {
    this.filteredPokemons = this.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      pokemon.type.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showDetails(pokemon: any) {
    this.router.navigate(['/poke-detail', pokemon.id]);
  }

}
