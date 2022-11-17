import { HeroService } from './../hero.service';
import { Person } from './../person';
import { map, Observable, EMPTY } from 'rxjs';
import { Hero } from './../hero';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prefetch-data-detail',
  templateUrl: './prefetch-data-detail.component.html',
  styles: [],
})
export class PrefetchDataDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) {
    this.savedPeople$ = this.activatedRoute.data.pipe(
      map((res) => <Person[]>res['data'])
    );
  }

  public selectedHero: Hero | null = null;
  public savedPeople$: Observable<Person[]>;

  ngOnInit(): void {
    this.selectedHero = <Hero>this.location.getState();
    if (!this.selectedHero.name) {
      this.activatedRoute.params.subscribe((res) => {
        this.heroService.getHeroById(res['id']).subscribe({
          next: (hero) => {
            this.selectedHero = <Hero>hero;
          },
          error: () => {
            this.router.navigate(['']);
            return EMPTY;
          },
        });
      });
    }
  }
}
