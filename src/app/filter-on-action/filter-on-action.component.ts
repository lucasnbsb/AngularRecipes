import { Person } from './../person';
import { PeopleService } from './../people.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, switchMap, Subscription, toArray, Observable, startWith, combineLatest, map, distinctUntilChanged, of } from 'rxjs';

@Component({
  selector: 'app-filter-on-action',
  templateUrl: './filter-on-action.component.html',
  styleUrls: ['./filter-on-action.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterOnActionComponent implements OnInit {
  // this is one way we can structure our observables.
  // the constructor runs before the first ngOnChanges and ngOnInit
  // it also allows us to typecheck our observables as we write
  // we just have to know exactly what our end goal is with the observables

  peoplesaved$: Observable<Person[]>;
  nameInput = new FormControl(``);
  nameFilter$: Observable<String | null>;
  peopleSavedFiltered$;

  constructor(private peopleService: PeopleService) {
    this.peoplesaved$ = this.peopleService.peoplesaved$;
    this.nameFilter$ = this.nameInput.valueChanges.pipe(
      startWith(this.nameInput.value),
      debounceTime(300),
      distinctUntilChanged()
    );
    this.peopleSavedFiltered$ = combineLatest([this.peoplesaved$, this.nameFilter$]).pipe(
      map(([people, value], i) => {
        return people.filter(p => p.name.toLowerCase().startsWith(value?.toLocaleLowerCase() ?? ''))
      }
    ))
  }

  ngOnInit(): void {}
}
