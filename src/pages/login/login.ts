import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController,AlertController,MenuController } from 'ionic-angular';
import {LoginApi} from './login-api';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import {RecoverAccountPage} from '../recover-account/recover-account';
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
  Data:any;

  
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public api:LoginApi,
    public alertCtrl:AlertController,
    private menu:MenuController
  ) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
    this.menu.enable(false, 'myMenu');
  }

  showAlert(data:String) {
    let alert = this.alertCtrl.create({
      title: data,
      buttons: ['OK']
    });
    alert.present();
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
    
    if(this.account.email.trim().length>0 && this.account.loginpassword.trim().length>0){
    this.Data = this.api.isAuthenticate(this.account);
    this.Data.then((data)=>{
      //use data.data for data 
      console.log(data);
      if(data.error_message=="Invalid Username or Password"){
           this.showAlert("Invalid Username or Password");
      }
    })
  }
  else{
        this.showAlert('Please enter email & password');
  }
}

forget(){
    this.navCtrl.push(RecoverAccountPage);
}
}
