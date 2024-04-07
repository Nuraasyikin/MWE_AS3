import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsDetectPageRoutingModule } from './animals-detect-routing.module';

import { AnimalsDetectPage } from './animals-detect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalsDetectPageRoutingModule
  ],
  declarations: [AnimalsDetectPage]
})
export class AnimalsDetectPageModule {}
