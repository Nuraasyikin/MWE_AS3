import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  subject = '';
  feedback = '';
  name = '';
  email = '';

  constructor(private toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your feedback has been submitted.',
      duration: 3000
    });
    toast.present();
  }

  submitFeedback() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Subject:', this.subject);
    console.log('Feedback:', this.feedback);

    this.presentToast();
  }

  ngOnInit() {
  }
}