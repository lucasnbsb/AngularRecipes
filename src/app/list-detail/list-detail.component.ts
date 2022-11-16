import { HeroService } from './../hero.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css'],
})
export class ListDetailComponent implements OnInit, OnDestroy {
  constructor(private heroService: HeroService) {}

  private sub: Subscription = new Subscription()
  
  ngOnInit(): void {
    this.sub = this.heroService.selectedHeroId$.subscribe((res) => {
      this.selectedHero = res;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe
  }

  public selectedHero: number = 0

  heroList$ = this.heroService.heroes$;
  details$ = this.heroService.details$;

  selectHero(id: number) {
    this.heroService.selectHero(id);
  }
  
}
