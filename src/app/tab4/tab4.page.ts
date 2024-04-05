import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  notificationsEnabled = true;

  constructor(private router: Router) { }

  goToTab1() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  ngOnInit() {
  }

}
