import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  template:`
    <ion-tabs>
      <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="icon-shouye"></ion-tab>
      <ion-tab [root]="tab2Root" tabTitle="发现" tabIcon="icon-faxian"></ion-tab>
      <ion-tab [root]="tab3Root" tabTitle="财富" tabIcon="icon-caifu"></ion-tab>
      <ion-tab [root]="tab4Root" tabTitle="购物车" tabIcon="icon-gouwuche"></ion-tab>
      <ion-tab [root]="tab5Root" tabTitle="我的" tabIcon="icon-wode"></ion-tab>
    </ion-tabs>

  `
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = HomePage;
  tab5Root = ContactPage;

  constructor() {

  }
}
