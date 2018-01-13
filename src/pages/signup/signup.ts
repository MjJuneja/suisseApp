import { Api } from './../../providers/api/api';
import { SignupApi } from './signup.service';
import { Component } from '@angular/core';
import { IonicPage, MenuController, AlertController,NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers:[SignupApi]
})
export class SignupPage {

  signup: { yname: string, email: string, password1: string, password2: string, spassword1: string, spassword2: string } = {
    yname: '',
    email: '',
    password1: '',
    password2: '',
    spassword1: '',
    spassword2: ''
  };

  logo:String = "assets/img/icon.png";
  logo1:String = "assets/img/logo.png";

  constructor(public api:SignupApi, public alertCtrl:AlertController,
    private menu:MenuController, public navCtrl: NavController, public global_api:Api) {
      this.menu.enable(false, 'myMenu');
    }

    showAlert(data:any) {
      let alert = this.alertCtrl.create({
        title: data,
        buttons: ['OK']
      });
      alert.present();
    };
  data:any;
  doRegister = (): void => {
    if(this.signup.yname.trim().length<1 || this.signup.email.trim().length<1 || this.signup.password1.trim().length<1 || this.signup.spassword1.trim().length<1){
      this.showAlert("Fill complete data!");
    }
    else if (this.signup.password1.trim().length<1 || this.signup.password2.trim().length<1 || this.signup.password1 !== this.signup.password2) {
      this.showAlert("Password not matched ! try again");
      this.signup.password1 = this.signup.password2 = '';
    }
    else if (this.signup.spassword1.trim().length<1 || this.signup.spassword2.trim().length<1 || this.signup.spassword1 !== this.signup.spassword2) {
      this.showAlert("Spending Password not matched ! try again");
      this.signup.spassword1 = this.signup.spassword2 = '';
    }
    else {
      let obj={
        username:this.signup.yname,
        email:this.signup.email,
        loginpassword:this.signup.password1,
        spendingpassword:this.signup.spassword1
      }
      this.data = this.api.isAuthenticate(obj);
      this.data.then((data)=>{
        console.log(data);
        if(data.error_message){
          this.showAlert(data.error_message);
        }
        else{
          this.showAlert("success");
        }
      })
    }
  };

  redirect=():void=>{
    this.navCtrl.push('LoginPage');
  };

}
