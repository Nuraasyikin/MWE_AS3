import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  alerts = [
    { location: 'Location 1', time: 'Time 1' },
    { location: 'Location 1', time: 'Time 1' }
    // other alerts...
  ];

  constructor(private router: Router) { }

  goToTab1() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  reloadPastNotifications() {
    this.alerts.push({ location: 'Past Location', time: 'Past Time' });
  }
}