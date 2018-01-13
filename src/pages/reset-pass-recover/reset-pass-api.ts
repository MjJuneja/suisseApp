import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class recoverPasswordApi {
    constructor(private http:Http){ }
Data:String;
    
  passReset(account:{otp:String,password:String},email:String):Promise<any>{
    var url ="http://api.suisse-coin.com/ResetLoginPassword/";
    let headers = new Headers();
    this.Data = "otp="+account.otp+"&email="+email+"&newpassword="+account.password;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.http.post(url,this.Data,{
        headers:headers
    }).toPromise().then((response)=>{
        console.log(response.json());
        return response.json();
        
    }).catch(this.handleError);
   
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
    

}