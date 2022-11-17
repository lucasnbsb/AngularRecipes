import { Person } from './../person';
import { Hero } from '../hero';
import { PeopleService } from './../people.service';
import { HeroService } from './../hero.service';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrefetchDataResolver implements Resolve<Person[]> {
  constructor(
    public heroService: HeroService,
    public peopleService: PeopleService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Person[]> {
    let id = route.params['id'];    
    return this.peopleService.getPeopleSavedByHero(id).pipe(
      catchError(() => {
        this.router.navigate([``]);
        return EMPTY;
      })
    );
  }
}
