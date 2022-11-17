import { PrefetchDataResolver } from './prefetch-data.resolver';
import { PrefetchDataDetailComponent } from './../prefetch-data-detail/prefetch-data-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrefetchDataComponent } from './prefetch-data.component';

const routes: Routes = [
  { path: '', component: PrefetchDataComponent },
  { path: ':id', component: PrefetchDataDetailComponent, resolve: {data: PrefetchDataResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrefetchDataRoutingModule {}
