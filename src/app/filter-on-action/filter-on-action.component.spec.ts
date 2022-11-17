import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOnActionComponent } from './filter-on-action.component';

describe('FilterOnActionComponent', () => {
  let component: FilterOnActionComponent;
  let fixture: ComponentFixture<FilterOnActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterOnActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterOnActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
