import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'swiper', // Redirige al swiper
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule),/*
    canActivate: [noAuthGuard] // accesible sdi el usuario no está autenticado*/
  },

  {
    path: 'swiper',
    loadChildren: () => import('./pages/swiper/swiper.module').then(m => m.SwiperPageModule),/*
    canActivate: [noAuthGuard] // accesible sdi el usuario no está autenticado*/
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule)
  },

  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule),/*
    canActivate: [authGuard] //Solo accesible si el usuario está autenticado*/
  },

  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
