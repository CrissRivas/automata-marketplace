import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url : string;
  constructor(private _http:HttpClient, private router: Router) {
    this.url = Global.url;
  }
  signInUser(user:any) :Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/auth/signin',params,{headers: headers});
  }

  signUpUser(user:any) :Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/auth/signup',params,{headers: headers});
  }

  verifyEmail(userId:string) :Observable<any>{
    let params = JSON.stringify(userId);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/auth/signup/'+ params,{headers: headers});
  }

verifyToken():Observable<any>{
  let headers = new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.url + '/auth/token',{headers: headers});
}

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
