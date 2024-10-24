import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwiperPage } from './swiper.page';

const routes: Routes = [
  {
    path: '',
    component: SwiperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwiperPageRoutingModule {}
