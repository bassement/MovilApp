import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { defineCustomElements } from '@teamhive/lottie-player/loader';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

//importacion de la PWA camara ionic
defineCustomElements(window);