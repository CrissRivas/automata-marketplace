import { Component, OnInit } from '@angular/core'
import { Usuario } from "src/models/usuario.model";
import { Comic } from 'src/models/comic.model';
import { ComicsService } from "../../services/comics.service";

import  { UsuarioService } from "../../services/usuario.service";
import { ActivatedRoute, Router } from "@angular/router";

import { KartService } from '../../services/kart.service';


@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss']
})
export class KartComponent implements OnInit {
  public usuario!: Usuario;
  public comics!: Comic[];
  public comicKart!: Comic[];
  public comicStatus={
    delete:true,
    love:true,
    kart:false,
    info:false
  }
  public loaded:boolean=false;
  public total:boolean=false;
  public kartTotal:number = 0;
  constructor(
    private usuarioService:UsuarioService,
    private comicSevise: ComicsService,
    private router: Router,
    private rute:ActivatedRoute,
    private kartService:KartService
  ) { }

  ngOnInit(): void {
    this.comicSevise.getAllComics().subscribe(
      res=>{
        this.comics = res;
        this.usuarioService.getUser().subscribe(
          res=>{
          this.usuario = res;
          this.comicKart = this.comics.filter(
            busco =>{
              if(this.usuario.Kart.indexOf(busco._id )!== -1){return true}
              else{return false}
            })
            this.kartTotal =  this.kartService.getTotal(this.comicKart);


            this.loaded = true;
            this.total=true;


          },error=>{
            console.log(error);
          })
      },error=>{
        console.log(error);
      }
    )
  }

  unKart(id:string){
    this.usuarioService.deleteKart(id)
    .subscribe(
      res=>{

        this.comicKart.forEach((element,index)=>{
          if(element._id == id){
            this.comicKart.splice(index,1);
          }
        })
        this.kartTotal =  this.kartService.getTotal(this.comicKart);

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
