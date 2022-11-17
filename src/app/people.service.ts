import { Subject } from 'rxjs';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private readonly urlPeople = `api/peoplesaved`;

  constructor(private http: HttpClient) {}

  peoplesaved$ = this.http.get<Person[]>(`${this.urlPeople}`);

  getPeopleSavedByHero(id: number) {
    return this.http.get<Person[]>(`${this.urlPeople}?savedby=${id}`)
  }


}
