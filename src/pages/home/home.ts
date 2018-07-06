import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  template:`
    <ion-header>
      <ion-navbar>
        <ion-title>Home</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <h2>Welcome to Ionic!</h2>
      <button ion-button large full>small</button>
    </ion-content>

  `
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
