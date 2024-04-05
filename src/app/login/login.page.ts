import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;

  login() {
    // Implement login logic here
    console.log('Login button clicked!');
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    
  }

  constructor() { }

  ngOnInit() {
  }

}
