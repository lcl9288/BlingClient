import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  template:`
    <ion-tabs>
      <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
      <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>
      <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>
    </ion-tabs>

  `
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
