import { RecoverFundsApi } from './recover-funds.service';
import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-recover-funds',
  templateUrl: 'recover-funds.html',
  providers:[RecoverFundsApi]
})
export class RecoverFundsPage {

  recover: { mnemonic: string, email: string, password1: string, password2: string, spassword1: string, spassword2: string } = {
    mnemonic: '',
    email: '',
    password1: '',
    password2: '',
    spassword1: '',
    spassword2: ''
  };
  logo:String = "assets/img/icon.png";
  logo1:String = "assets/img/logo.png";


  constructor(public navCtrl: NavController, public navParams: NavParams, public global_api:Api, private api: RecoverFundsApi) {
    this.recover.mnemonic = navParams.data.mnemonic;
  }

  data:any;
  recoverFunds = (): void => {
    if(this.recover.email.trim().length<1 || this.recover.password1.trim().length<1 || this.recover.spassword1.trim().length<1){
      this.global_api.showAlert("Fill complete data!");
    }
    else if (this.recover.password1.trim().length<1 || this.recover.password2.trim().length<1 || this.recover.password1 !== this.recover.password2) {
      this.global_api.showAlert("Password not matched ! try again");
      this.recover.password1 = this.recover.password2 = '';
    }
    else if (this.recover.spassword1.trim().length<1 || this.recover.spassword2.trim().length<1 || this.recover.spassword1 !== this.recover.spassword2) {
      this.global_api.showAlert("Spending Password not matched ! try again");
      this.recover.spassword1 = this.recover.spassword2 = '';
    }
    else {
      let obj={
        mnemonic:this.recover.mnemonic,
        email:this.recover.email,
        loginpassword:this.recover.password1,
        spendingpassword:this.recover.spassword1
      }
      this.data = this.api.isAuthenticate(obj);
      this.data.then((data)=>{
        console.log(data);
        if(data.error_message){
          this.global_api.showAlert(data.error_message);
        }
        else{
          this.global_api.showAlert("Successfull");
          this.navCtrl.push('LoginPage');
        }
      })
    }
  };

  redirect=():void=>{
    this.navCtrl.push('LoginPage');
  };

}
