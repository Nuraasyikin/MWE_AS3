import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsArchivePageRoutingModule } from './animals-archive-routing.module';

import { AnimalsArchivePage } from './animals-archive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalsArchivePageRoutingModule
  ],
  declarations: [AnimalsArchivePage]
})
export class AnimalsArchivePageModule {}
