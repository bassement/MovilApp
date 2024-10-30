import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitsPageRoutingModule } from './habits-routing.module';

import { HabitsPage } from './habits.page';
import { SharedModule } from 'src/app/shared/shared.module';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitsPageRoutingModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HabitsPage
      }
    ])


  ],
  declarations: [HabitsPage]
})
export class HabitsPageModule { }
