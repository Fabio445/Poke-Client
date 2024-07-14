import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/**
 * Represents the HomeComponent of the application.
 * This component is responsible for displaying the home page and managing the animations and data retrieval.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('out => in', animate('500ms ease-in')),
      transition('in => out', animate('500ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  /**
   * An array of pokemons.
   */
  pokemons: any[] = [];

  /**
   * The animation state of the component.
   * Possible values are 'in' and 'out'.
   */
  animationState = 'in';

  /**
   * The randomly selected pokemon.
   */
  randomPokemon: any;

  /**
   * The subscription to the timer observable for updating the pokemons.
   */
  private updateSubscription: Subscription | undefined;

  constructor(private pokemonService: PokemonService) {}

  /**
   * Initializes the component.
   * Sets up the timer observable to update the pokemons periodically.
   */
  ngOnInit() {
    this.updateSubscription = timer(0, 30000)
      .pipe(
        switchMap(() => {
          this.animationState = 'out';
          return timer(500).pipe(switchMap(() => this.pokemonService.getRandomPokemons()));
        })
      )
      .subscribe(data => {
        this.pokemons = data;
        this.animationState = 'in';
      });
  }

  /**
   * Loads a random pokemon.
   */
  loadRandomPokemon() {
    this.pokemonService.getRandomPokemon().subscribe(
      data => {
        this.randomPokemon = data;
      },
      error => {
        console.error('Failed to load random Pokémon:', error);
      }
    );
  }

  /**
   * Displays the details of a pokemon.
   * @param pokemon The pokemon object to view details for.
   */
  viewDetails(pokemon: any) {
    // Implement the logic to display the details or redirect to a detail page
    console.log('Viewing details for:', pokemon);
  }
  
  /**
   * Cleans up resources before the component is destroyed.
   */
  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
}
