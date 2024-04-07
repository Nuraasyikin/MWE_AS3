import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsDiaryPage } from './animals-diary.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsDiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsDiaryPageRoutingModule {}
