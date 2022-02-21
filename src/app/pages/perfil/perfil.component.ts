import { Component, OnInit } from '@angular/core'
import { Usuario } from "src/models/usuario.model";
import { Comic } from 'src/models/comic.model';
import { ComicsService } from "../../services/comics.service";
import { KartService } from "../../services/kart.service";
import  { AuthService } from "../../services/auth.service";
import  { UsuarioService } from "../../services/usuario.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public usuario!: Usuario;
  public comics!: Comic[];
  public comicLove!: Comic[];
  public comicStatus={
    delete:true,
    love:false,
    kart:true,
    info:false
  }

  public loaded:boolean=false;

  constructor(
    private usuarioService:UsuarioService,
    private comicSevise: ComicsService,
    private kartServise: KartService,
    private autService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUser()
    .subscribe( res =>{
          this.usuario = res;
      })
      this.getComics();

    }


getComics(){
  this.comicSevise.getAllComics().subscribe(
    res=>{
      this.comics = res;


      this.comicLove = this.comics.filter(
        busco =>{
          if(this.usuario.love.indexOf(busco._id )!== -1){return true}
          else{return false}
        }
      )
      this.loaded = true;
    },
    err=>{
      console.log(err);

    }
  )
}

unlove(id:string){
  this.usuarioService.takeLove(id)
  .subscribe(
    res=>{
      this.usuario.love.forEach((element, index) => {
        if (element == id ) {
            this.usuario.love.splice(index, 1)
        }
    })

    },
    err=>{
      console.log(err);

    }
  )
}

onAddToShoppingCart(comic:Comic){

}

onAddToLoveOnes(comic:Comic){

}
onMostrarDetalle(name:string){

}


}
