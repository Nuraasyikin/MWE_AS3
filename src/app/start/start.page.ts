import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})


export class StartPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    // Implement login logic here (e.g., navigate to another page)
    this.router.navigateByUrl('/login');
    console.log('Login button clicked!');
  }

  signup() {
    // Implement signup logic here (e.g., navigate to signup page)
    this.router.navigateByUrl('/sign-up');
    console.log('Signup button clicked!');
  }

}
