import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsCalendarPageRoutingModule } from './animals-calendar-routing.module';

import { AnimalsCalendarPage } from './animals-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalsCalendarPageRoutingModule
  ],
  declarations: [AnimalsCalendarPage]
})
export class AnimalsCalendarPageModule {}
