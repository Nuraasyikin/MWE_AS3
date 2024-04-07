import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsDetectPage } from './animals-detect.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsDetectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsDetectPageRoutingModule {}
