import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'


@IonicPage()
@Component({
  selector: 'page-recover-email',
  templateUrl: 'recover-email.html',
})
export class RecoverEmailPage {
  logo:String = "assets/img/icon.png";
  logo1:String = "assets/img/logo.png";

  mnemonic:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public global_api:Api) {
  }

  passInput=()=>{
    if(this.mnemonic.trim().length>0){
      this.navCtrl.push('RecoverFundsPage',{mnemonic:this.mnemonic});
    }
    else{
      this.global_api.showAlert("Please Enter the Phrase");
    }
  };

  redirect=():void=>{
    this.navCtrl.push('LoginPage');
  };

}
