import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-diary',
  templateUrl: './animals-diary.page.html',
  styleUrls: ['./animals-diary.page.scss'],
})
export class AnimalsDiaryPage implements OnInit {
  showForm = false;
  day = '';
  entries: { day: string }[] = [];

  addEntry() {
    console.log('Day:', this.day);
    this.entries.push({ day: this.day });
    this.day = '';
    this.showForm = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
