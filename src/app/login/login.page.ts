import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  defaultEmail = 'user@gmail.com'; // Replace with your desired default email
  defaultPassword = '12345678'; // Replace with your desired default password

  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    // Implement login logic here
    console.log('Login button clicked!');
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    if (this.email === this.defaultEmail && this.password === this.defaultPassword) {
      // Login successful! Navigate to desired page
      this.router.navigateByUrl('/tabs/tab1'); // Replace with the page you want to access
    } else {
      // Handle invalid login (e.g., display error message)
      console.error('Invalid email or password');
    }
  }

    
  }

  




