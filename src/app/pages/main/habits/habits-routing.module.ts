import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitsPage } from './habits.page';

const routes: Routes = [
  {
    path: '',
    component: HabitsPage
  },
  // {
  //   path: 'recommendations',
  //   loadChildren: () => import('./recommendations/recommendations.module').then( m => m.RecommendationsPageModule)
  // },



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitsPageRoutingModule { }
