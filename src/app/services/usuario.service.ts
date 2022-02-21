import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url : string;
  constructor(private _http:HttpClient, private router: Router) {
    this.url = Global.url;
  }
 getUser():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/user',{headers: headers});
  }
  giveLove(id:string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/user/love/'+id,{headers: headers});
  }
  takeLove(id:string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url + '/user/love/'+id,{headers: headers});
  }
  addKart(id:string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/user/kart/'+id,{headers: headers});
  }
  deleteKart(id:string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url + '/user/kart/'+id,{headers: headers});
  }
}
