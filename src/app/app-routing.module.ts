import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'animals-archive',
    loadChildren: () => import('./animals-archive/animals-archive.module').then( m => m.AnimalsArchivePageModule)
  },
  {
    path: 'animals-detect',
    loadChildren: () => import('./animals-detect/animals-detect.module').then( m => m.AnimalsDetectPageModule)
  },
  {
    path: 'animals-calendar',
    loadChildren: () => import('./animals-calendar/animals-calendar.module').then( m => m.AnimalsCalendarPageModule)
  },
  {
    path: 'animals-diary',
    loadChildren: () => import('./animals-diary/animals-diary.module').then( m => m.AnimalsDiaryPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
