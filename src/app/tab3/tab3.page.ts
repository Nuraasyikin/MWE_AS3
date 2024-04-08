import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  location = "Bandar Seri Begawan, Brunei Darussalam";
  date = new Date().toLocaleDateString();
  time = new Date().toLocaleTimeString();
  showForm = false;
  newComment = '';
  entries: { comment: string }[] = [];

  constructor() {}

  addEntry() {
    this.entries.push({ comment: this.newComment });
    this.newComment = '';
    this.showForm = false;
  }
  
}