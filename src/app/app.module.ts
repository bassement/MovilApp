import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//firebaseimport
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';

//pal swiper chicken
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';

register();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: "md" }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //enviroment
    RouterModule

  ],


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
