import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginApi{
    Data:String
    constructor(private http:Http){

   }
    
    isAuthenticate(obj:{email:String,loginpassword:String}):Promise<any>{
    var url ="http://api.suisse-coin.com/authenticate/";
    let headers = new Headers();
    this.Data = "email="+obj.email+"&loginpassword="+obj.loginpassword;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.http.post(url,this.Data,{
        headers:headers
    }).toPromise().then((response)=>{
        return response.json();
    }).catch(this.handleError);
   
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
    
  }