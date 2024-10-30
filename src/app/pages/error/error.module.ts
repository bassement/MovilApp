import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorPageRoutingModule } from './error-routing.module';

import { ErrorPage } from './error.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { defineCustomElements } from '@teamhive/lottie-player/loader';

defineCustomElements(window);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorPageRoutingModule,
    SharedModule
  ],
  declarations: [ErrorPage]
})
export class ErrorPageModule { }
