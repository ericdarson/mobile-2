import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FirstPage } from '../first/First';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 first = FirstPage;

  constructor(public navCtrl: NavController) {

  }

  public buttonClicked(){
    console.log("Button is clicked");
  }
  public gotoFirstPage(){
    this.navCtrl.push(this.first);
  }
  
}
