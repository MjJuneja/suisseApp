import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
/**
 * Generated class for the ResetPassRecoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-pass-recover',
  templateUrl: 'reset-pass-recover.html',
})
export class ResetPassRecoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  logo:String = "assets/img/icon.png";
  logo1:String = "assets/img/logo.png";
  account: { otp: string, password: string } = {
    otp: '',
    password: ''
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPassRecoverPage');
  }

  BackToSignIn(){
    this.navCtrl.push(LoginPage);
  }

}
