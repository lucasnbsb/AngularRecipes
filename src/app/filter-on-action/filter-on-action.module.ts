import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterOnActionRoutingModule } from './filter-on-action-routing.module';
import { FilterOnActionComponent } from './filter-on-action.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilterOnActionComponent
  ],
  imports: [
    CommonModule,
    FilterOnActionRoutingModule,
    ReactiveFormsModule
  ]
})
export class FilterOnActionModule { }
