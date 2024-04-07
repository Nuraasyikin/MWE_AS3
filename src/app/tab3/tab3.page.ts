import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  location = "Golden Gate Park, San Francisco";
  date = new Date().toLocaleDateString();
  time = new Date().toLocaleTimeString();

  showModal = false;
  experience = '';
  photo = '';

  constructor(private modalCtrl: ModalController) {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitForm() {
    console.log(this.experience, this.photo);
    this.closeModal();
  }
}