import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomHabitsPageRoutingModule } from './custom-habits-routing.module';

import { CustomHabitsPage } from './custom-habits.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomHabitsPageRoutingModule,
    SharedModule
  ],
  declarations: [CustomHabitsPage]
})
export class CustomHabitsPageModule {}
