import { SignupApi } from './signup.service';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

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


  constructor(public api:SignupApi) { }

  data:any;
  doRegister = (): void => {
    if (!this.signup.password1 || !this.signup.password2 || this.signup.password1 !== this.signup.password2) {
      alert("Password not matched ! try again");
      this.signup.password1 = this.signup.password2 = '';
    }
    else if (!this.signup.spassword1 || !this.signup.spassword2 || this.signup.spassword1 !== this.signup.spassword2) {
      alert("Spending Password not matched ! try again");
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
        // "error_message": "Sorry! You have a wallet already.",
      })
    }
  };

}
