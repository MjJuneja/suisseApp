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
  logo:String = "assets/img/icon.png";
  logo1:String = "assets/img/logo.png";
  constructor(public navCtrl: NavController, public navParams: NavParams,private menu:MenuController
  ) {
    this.menu.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverAccountPage');
  }

  back(){
    this.navCtrl.pop();
  }
  forgot_email(){

  }

  forgot_password(){
    
  }

}
