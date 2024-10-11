import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserQuestionsPage } from './user-questions.page';

const routes: Routes = [
  {
    path: '',
    component: UserQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserQuestionsPageRoutingModule {}
