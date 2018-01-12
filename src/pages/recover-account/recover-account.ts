import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the RecoverAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recover-account',
  templateUrl: 'recover-account.html',
})
export class RecoverAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private menu:MenuController) {
    this.menu.enable(true, 'myMenu')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverAccountPage');
  }

}
