import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
//import { App } from 'ionic-angular';
//import { MyApp } from '../../app/app.component';
/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */{}

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  ss: string;
  scrollAmount: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App,private zone:NgZone) {
    this.selectedItem = navParams.get('item');
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];
    this.items = [];
    for(let i =1;i<11;i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  };
  scrollHandler(event){
    //console.log(event)
    let l = document.getElementById('list');
    this.zone.run(()=>{
      //console.log(l);
      // since scrollAmount is data-binded,
      // the update needs to happen in zone
      this.scrollAmount++
    })
  }


  openitems(items) {
    this.app.getRootNav().push(ItemDetailsPage, {
      item: items
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
