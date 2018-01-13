import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,AlertController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {recoverPassApi} from './recover_password_api';
import {Api} from '../../providers/api/api';
import {ResetPassRecoverPage} from '../reset-pass-recover/reset-pass-recover';
/**
 * Generated class for the RecoverPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recover-password',
  templateUrl: 'recover-password.html',
  providers:[recoverPassApi]
})
export class RecoverPasswordPage {
  logo:String = "assets/img/icon.png";
  logo1:String = "assets/img/logo.png";
  email:String = "";
  constructor(public navCtrl: NavController,
   public navParams: NavParams,private api:recoverPassApi,public alertCtrl:AlertController,
    private menu:MenuController, private global_api:Api,
    
   ) {
  }

  showAlert(data:any) {
    let alert = this.alertCtrl.create({
      title: data,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverPasswordPage');
  }
  backToSignIn(){
    this.navCtrl.push(LoginPage);
  }

  recoverNow(){
    if(this.email.trim().length>0){
    this.api.getOTP(this.email).then((data)=>{
      if(data.error_message=="Invalid Username or Password"){
        this.global_api.showAlert("Invalid Username or Password");
      }
      else if(data.data=="success!"){
        this.navCtrl.push(ResetPassRecoverPage);
      }
    })
  }
  else{
    this.global_api.showAlert("Please Enter the Email Id");
  }
  }
}
