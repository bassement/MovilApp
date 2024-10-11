import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [



  {
    path: '',
    redirectTo: 'auth', //cambiar ruta de home(yanoexiste) a auth
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'habits',
    loadChildren: () => import('./pages/habits/habits.module').then(m => m.HabitsPageModule)

  },  {
    path: 'user-questions',
    loadChildren: () => import('./user-questions/user-questions.module').then( m => m.UserQuestionsPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

