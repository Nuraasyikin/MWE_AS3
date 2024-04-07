import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-archive',
  templateUrl: './animals-archive.page.html',
  styleUrls: ['./animals-archive.page.scss'],
})
export class AnimalsArchivePage implements OnInit {
  openAnimal(arg0: string) {
    console.log(arg0);
  }

  constructor() { }

  ngOnInit() {
  }

}
