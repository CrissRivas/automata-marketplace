import { Injectable } from '@angular/core';
import { Comic } from "../../models/comic.model";
import { HttpClient } from "@angular/common/http";
import { Global } from "./global";

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  private comicsKard:Comic[]=[];
  private apiUrl!: string;
  constructor(
    private http: HttpClient
  ) { this.apiUrl= Global.url; }
    getAllComics(){
      return this.http.get<Comic[]>(this.apiUrl + '/productos');
    }
    getComic(_id:string){
      return this.http.get<Comic>(`${this.apiUrl}` + '/productos/'+ _id);
    }


}
