import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignupApi {
  data: string;
  constructor(private http: Http) {

  }

  isAuthenticate(obj: { username:string, email: string, loginpassword: string, spendingpassword:string }): Promise<any> {
    let url = "http://api.suisse-coin.com/create_Wallet/";
    let data = "username=" + obj.username + "&email=" + obj.email + "&loginpassword=" + obj.loginpassword + "&spendingpassword=" + obj.spendingpassword;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(url, data, {
      headers: headers
    }).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);

  }

  private handleError(error: any):void {
    // console.error('An error occurred', error);
    alert("Error!!!");
    // return Promise.reject(error.message || error);
  }

}
