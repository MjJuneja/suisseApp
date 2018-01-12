import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {LoginApi} from './login-api';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
// import {Http,Headers} from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[LoginApi]
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, loginpassword: string } = {
    email: '',
    loginpassword: ''
  };
  logo:String = "assets/img/icon.png";
  Data:Object;
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public api:LoginApi,
  ) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
//code to navigate when login occurs

    // this.user.login(this.account).subscribe((resp) => {
    //   this.navCtrl.push(MainPage);
    // }, (err) => {
    //   this.navCtrl.push(MainPage);
    //   // Unable to log in
    //   let toast = this.toastCtrl.create({
    //     message: this.loginErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
    
    
    this.Data = this.api.isAuthenticate(this.account);
    this.Data.then((data)=>{
      //use data.data for data 
      console.log(data);
    })
  }
}
