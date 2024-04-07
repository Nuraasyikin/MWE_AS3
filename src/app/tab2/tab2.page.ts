import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  alerts = [
    { location: 'Kg. Batang Tuau', time: '12:00' },
    { location: 'Kg. Puni', time: '15:00' }
    // other alerts...
  ];

  constructor(private router: Router) { }

  goToTab1() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  reloadPastNotifications() {
    this.alerts.push({ location: 'Bandar Seri Begawan', time: '01:00' });
  }
}