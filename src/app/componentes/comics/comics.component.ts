import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/models/comic.model';
import { ComicsService } from "../../services/comics.service";
import { KartService } from "../../services/kart.service";
import { LoveService } from "../../services/love.service";
import  { AuthService } from "../../services/auth.service";
import  { UsuarioService } from "../../services/usuario.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})

export class ComicsComponent implements OnInit {
  public comics:Comic[]=[];
  public comicsKard:Comic[]=[];
  public total: Number = 0;
  public mostrarDetalle:Boolean = false;
  public logeado:Boolean=false;
  public msg:string= "al carrito de compras";
  public comicDetalle!: Comic;

  constructor(
    private comicSevise: ComicsService,
    private kartServise: KartService,
    private loveServise: LoveService,
    private autService:AuthService,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.loveServise.forLove();
   }

  ngOnInit(): void {

    this.comicSevise.getAllComics()
    .subscribe(data=>{
      this.comics = data;
    })


  }


  onAddToShoppingCart(product: Comic) {
    if(this.autService.loggedIn()){
      this.autService.verifyToken().subscribe(
        res=>{
          if (res.validToken) {
            this.usuarioService.addKart(product._id)
            .subscribe(res=>{
              console.log(res);
            })
          } else {
            this.router.navigate(['/login']);
          }},err=>{
            this.router.navigate(['/login']);
          }
      )
    }
    else{
      this.msg ="al carrito de compras";
      this.logeado= true;
    }
  }

  onRemoveToShoppingCart(product: Comic) {
    if(this.autService.loggedIn()){
      this.autService.verifyToken().subscribe(
        res=>{
          if (res.validToken) {
            this.usuarioService.deleteKart(product._id)
            .subscribe(res=>{})
          } else {
            this.router.navigate(['/login']);
          }},err=>{
            this.router.navigate(['/login']);
          }
      )
    }
    else{
      this.msg ="al carrito de compras";
      this.logeado= true;
    }
  }

  onAddToLoveOnes(product: Comic){
    if(this.autService.loggedIn()){
      this.autService.verifyToken().subscribe(
        res=>{
          console.log(res.validToken);

          if (res.validToken) {
            this.usuarioService.giveLove(product._id)
            .subscribe(res=>{
              console.log(res);
            })
          } else {
            this.router.navigate(['/login']);
          }},err=>{
            this.router.navigate(['/login']);
          }

      )

    }
    else{
      this.msg ="a favoritos";
      this.logeado= true;
    }
  }

  cerrarMSG(){
    this.logeado=false;
  }

  toggleDetalle(){
    this.mostrarDetalle = !this.mostrarDetalle;
  }

 onMostrarDetalle(_id:string){
  this.comicSevise.getComic(_id)
  .subscribe(data=>{
    this.comicDetalle = data;
    this.toggleDetalle();
  })

 }
}
