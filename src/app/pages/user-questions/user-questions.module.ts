import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserQuestionsPageRoutingModule } from './user-questions-routing.module';

import { UserQuestionsPage } from './user-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserQuestionsPageRoutingModule
  ],
  declarations: [UserQuestionsPage]
})
export class UserQuestionsPageModule {}
