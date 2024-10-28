import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { trigger, state, style, transition, animate } from '@angular/animations';
import { PopoverOptionsComponent } from './components/popover-options/popover-options.component';


@NgModule({
  declarations: [HeaderComponent, CustomInputComponent, LogoComponent, PopoverOptionsComponent],

  exports: [HeaderComponent, CustomInputComponent, LogoComponent, ReactiveFormsModule, PopoverOptionsComponent, FormsModule],

  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule, //formularios
    FormsModule //formularios papito

  ]

})
export class SharedModule { }

