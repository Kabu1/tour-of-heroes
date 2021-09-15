import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'

})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(id: Number): Observable<Hero[]>{
    const heroes = HEROES.find(h => history.id === id)!;
    this.messageService.add('HeroService: fetched heroes id = ${id}');
    return of(hero);
  }

}
