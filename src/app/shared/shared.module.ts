import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';


@NgModule({
  declarations: [HeaderComponent, CustomInputComponent,LogoComponent],

  exports: [HeaderComponent, CustomInputComponent,LogoComponent,ReactiveFormsModule],

  imports: [
    CommonModule,
    IonicModule, 
    ReactiveFormsModule, //formularios
    FormsModule //formularios papito

  ]

})
export class SharedModule { }

