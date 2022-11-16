import { Hero, Details } from './hero';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  private readonly urlHero = `api/heroes`;
  private readonly urlDetails = `api/details`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private selectedHeroSubject = new Subject<number>();
  selectedHeroId$ = this.selectedHeroSubject.asObservable();

  heroes$ = this.http.get<Hero[]>(this.urlHero);
  details$ = this.selectedHeroId$.pipe(
    switchMap((id) => this.http.get<Details>(`${this.urlDetails}/${id}`))
  );

  selectHero(id: number) {
    this.selectedHeroSubject.next(id);
  }

}
