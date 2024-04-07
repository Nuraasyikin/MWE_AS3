import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsDiaryPageRoutingModule } from './animals-diary-routing.module';

import { AnimalsDiaryPage } from './animals-diary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalsDiaryPageRoutingModule
  ],
  declarations: [AnimalsDiaryPage]
})
export class AnimalsDiaryPageModule {}
