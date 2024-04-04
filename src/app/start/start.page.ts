import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})


export class StartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login() {
    // Implement login logic here (e.g., navigate to another page)
    console.log('Login button clicked!');
  }

  signup() {
    // Implement signup logic here (e.g., navigate to signup page)
    console.log('Signup button clicked!');
  }

}
