import { Injectable } from '@angular/core';
import { Usuario } from "src/models/usuario.model";
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoveService {

  private usuario!:Usuario;

  constructor(private usuarioService:UsuarioService) {}
  forLove(){
    this.usuarioService.getUser().subscribe(
      res=>{
        if (res) {
          this.usuario=res;
        }
      },
      error=>{
        console.log(error);

      }
    )
  }

  imInLove(id:string){
    if (this.usuario.love.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

}
