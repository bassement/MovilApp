import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [



  {
    path: '',
    redirectTo: 'swiper', //primera page de la app
    pathMatch: 'full'
  },


  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
  },
  

  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule)
  },

  
  // {
  //   path: 'habits',
  //   loadChildren: () => import('./pages/main/habits/habits.module').then(m => m.HabitsPageModule)

  // },

  {
    path: 'swiper',
    loadChildren: () => import('./pages/swiper/swiper.module').then(m => m.SwiperPageModule)
  },

  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule)

  },

  //error al final
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule)
  },
  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

