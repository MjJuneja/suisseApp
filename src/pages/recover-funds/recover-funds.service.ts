import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecoverFundsApi {
  data: string;
  constructor(private http: Http) {

  }

  isAuthenticate(obj: { mnemonic:string, email: string, loginpassword: string, spendingpassword:string }): Promise<any> {
    let url = "http://api.suisse-coin.com/RecoverWallet/";
    let data = "MnemonicPhrase=" + obj.mnemonic + "&Email=" + obj.email + "&loginPassword=" + obj.loginpassword + "&spendingPassword=" + obj.spendingpassword;
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
