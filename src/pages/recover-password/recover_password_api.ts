import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class recoverPassApi {
    constructor(private http:Http){ }

    
  getOTP(email:String):Promise<any>{
    var url ="http://api.suisse-coin.com/RequestOTP/"+email+"/";
    let headers = new Headers();
    // this.Data = "email="+obj.email+"&loginpassword="+obj.loginpassword;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.http.get(url,{
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