import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
openFeedbackForm() {
  this.router.navigate(['/feedback']);
}
openAnimalArchive() {
  this.router.navigate(['/animals-archive']);
}

openAnimals() {
  this.router.navigate(['/animals-detect']);
}

openCalendar() {
  this.router.navigate(['/animals-calendar']);
}

  openDiary() {
    // Implement logic to open the Animals Diary page here
    console.log('Animals Diary button clicked!');
  }



  constructor(private router: Router) {}

}
