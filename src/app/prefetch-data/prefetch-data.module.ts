import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrefetchDataRoutingModule } from './prefetch-data-routing.module';
import { PrefetchDataComponent } from './prefetch-data.component';
import { PrefetchDataDetailComponent } from '../prefetch-data-detail/prefetch-data-detail.component';


@NgModule({
  declarations: [
    PrefetchDataComponent,
    PrefetchDataDetailComponent
  ],
  imports: [
    CommonModule,
    PrefetchDataRoutingModule
  ]
})
export class PrefetchDataModule { }
