import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefetchDataComponent } from './prefetch-data.component';

describe('PrefetchDataComponent', () => {
  let component: PrefetchDataComponent;
  let fixture: ComponentFixture<PrefetchDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefetchDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefetchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
