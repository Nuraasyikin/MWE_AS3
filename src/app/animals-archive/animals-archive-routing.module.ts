import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsArchivePage } from './animals-archive.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsArchivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsArchivePageRoutingModule {}
