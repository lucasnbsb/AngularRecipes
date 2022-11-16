import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];

    const details = [
      { id: 12, backstory: 'Just too nice to be a vilain' },
      { id: 13, backstory: 'Played too much bomberman' },
      { id: 14, backstory: 'Fast and also a latin nerd' },
      { id: 15, backstory: 'Just Magneto with an A' },
      { id: 16, backstory: 'Ate a cursed Fruit' },
      { id: 17, backstory: 'Very dynamic' },
      { id: 18, backstory: 'Actualy average intelligence, but super strengh' },
      { id: 19, backstory: 'Fell in a volcano, idk what happened' },
      { id: 20, backstory: 'Hurricane was taken' },
    ];
    return { heroes, details };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}