import { HeroService } from './../hero.service';
import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-prefetch-data',
  templateUrl: './prefetch-data.component.html',
  styleUrls: ['./prefetch-data.component.css'],
})
export class PrefetchDataComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private peopleService: PeopleService,
    
  ) {}
  heroList$ = this.heroService.heroes$;

  ngOnInit(): void {}

  navigateWithData() {

  }
}
