import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  pokemons: any[] = [];
  animationState = 'in';
  private updateSubscription: Subscription | undefined;

  constructor(private pokemonService: PokemonService) {}

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

  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
}
