import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Artista } from "../../models/artista.model";
import { Global } from "./global";
@Injectable({
  providedIn: 'root'
})

export class ArtistasService {
  private apiUrl!: string;
  private artistasCards!:Artista[];

  constructor(
    private http: HttpClient
  ) { this.apiUrl= Global.url;}

  getAllArtist(){
    return this.http.get<Artista[]>(this.apiUrl + '/artista');
  }
  getArtista(nombre:String){
    return this.http.get<Artista>(`${this.apiUrl}` + '/artista/'+ nombre);
  }
  getArtistaById(id:String){
    return this.http.get<Artista>(`${this.apiUrl}` + '/artista/id/'+ id);
  }
}
