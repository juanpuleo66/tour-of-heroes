import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // setTimeout(() => {
    //   console.error('::: HeroService-getHeroes-HEROES-1:', HEROES);
    // }, 3000);
    // console.error('::: HeroService-getHeroes-HEROES-2:', HEROES);
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
