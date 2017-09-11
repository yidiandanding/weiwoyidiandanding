import { Component } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

// @IonicPage({
//   name: 'my-page',
//   segment: 'some-path'
// })
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ListPage;

  constructor(public navCtrl: NavController) {
    //this.navCtrl.push('my-page');
  }
}
