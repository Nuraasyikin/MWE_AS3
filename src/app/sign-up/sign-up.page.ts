import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  // email: any;
  // password: any;
  // confirmPassword: any;

  email: string = '';
  password: string = '';

  signup() {
    // Implement signup logic here
    console.log('Signup button clicked!');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // console.log('Confirm Password:', this.confirmPassword);

    // You'd typically make an API call to a server to create a new user account here
  }


  constructor() { }

  ngOnInit() {
  }

}
