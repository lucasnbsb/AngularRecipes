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

  heroes$ = this.http.get<Hero[]>(this.urlHero, this.httpOptions);
  details$ = this.selectedHeroId$.pipe(
    switchMap((id) =>
      this.http.get<Details>(`${this.urlDetails}/${id}`, this.httpOptions)
    )
  );

  getHeroById(id: number) {
    return this.http.get(`${this.urlHero}/${id}`, this.httpOptions);
  }

  selectHero(id: number) {
    this.selectedHeroSubject.next(id);
  }
}
