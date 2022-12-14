
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'listdetail', loadChildren: () => import('./list-detail/list-detail.module').then(m => m.ListDetailModule) }, { path: 'filteronaction', loadChildren: () => import('./filter-on-action/filter-on-action.module').then(m => m.FilterOnActionModule) }, { path: 'prefetchdata', loadChildren: () => import('./prefetch-data/prefetch-data.module').then(m => m.PrefetchDataModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
