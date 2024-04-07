import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsCalendarPage } from './animals-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsCalendarPageRoutingModule {}
