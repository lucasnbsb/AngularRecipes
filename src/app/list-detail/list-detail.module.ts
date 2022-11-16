import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDetailRoutingModule } from './list-detail-routing.module';
import { ListDetailComponent } from './list-detail.component';


@NgModule({
  declarations: [
    ListDetailComponent
  ],
  imports: [
    CommonModule,
    ListDetailRoutingModule
  ]
})
export class ListDetailModule { }
