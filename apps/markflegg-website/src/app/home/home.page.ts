import { Component } from '@angular/core';

@Component({
  selector: 'markflegg-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    console.log('This is just triggering a change to code affecting a test');
  }
}
