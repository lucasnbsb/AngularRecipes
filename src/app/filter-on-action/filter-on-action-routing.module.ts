import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterOnActionComponent } from './filter-on-action.component';

const routes: Routes = [{ path: '', component: FilterOnActionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterOnActionRoutingModule { }
