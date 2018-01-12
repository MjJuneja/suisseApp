import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Http, Headers } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
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
  constructor(private http: Http, private headers:Headers) { }

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
      let url = "http://api.suisse-coin.com/create_Wallet/";
      let data = "username=" + this.signup.yname + "&email=" + this.signup.email + "&loginpassword" + this.signup.password1 + "&spendingpassword" + this.signup.spassword1;
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(url, data, {
        headers: this.headers
      }).subscribe((data => {
        console.log(data);
      }),(error=>{
        console.log(error);
      }));
      //   var obj = {
      //     username:this.signup.yname,
      //     email: this.signup.email,
      //     // Country: $scope.formData.country,
      //     // SponsoredEmailId: $scope.formData.ID,
      //     loginpassword: this.signup.password1,
      //     spendingpassword: this.signup.spassword1
      //   }
      //   let promise=this.callServer(obj);
      //   promise.subscribe((result => {
      //       console.log(result);
      //     }),(error=>{
      //       console.log(error);
      //     }));
    }
  };

}
