import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr. Chump' },
      { id: 2, name: 'Dr. Chimp' },
      { id: 3, name: 'Dr. Strange' },
      { id: 4, name: 'Dr. Bruce Banner' },
      { id: 5, name: 'Mr. Tony Stark' },
      { id: 6, name: 'Thor' },
      { id: 7, name: 'Magneto' },
      { id: 8, name: 'Spiderman' },
      { id: 9, name: 'Mr. Norman Osborn' },
      { id: 10, name: 'Thanos' },
      { id: 11, name: 'Vision' },
      { id: 12, name: 'Mr. Peter Quill' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1:11;
  }

  constructor() { }
}
