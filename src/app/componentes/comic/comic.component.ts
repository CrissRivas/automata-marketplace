import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';
import { Comic } from "../../../models/comic.model";
import  { LoveService } from "../../services/love.service";


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
  public imagen:string='';
  public love:boolean=false;
  public kart:boolean=false;
  @Input() comic!:Comic;
  @Output() addedProduct = new EventEmitter<Comic>();
  @Output() addedlove = new EventEmitter<Comic>();
  @Output() unKartProduct = new EventEmitter<Comic>();
  @Output() unLove = new EventEmitter<Comic>();
  @Output() showProduct = new EventEmitter<string>();
  constructor(private loveService:LoveService) { }

ngOnInit(): void {
    this.love = this.loveService.imInLove(this.comic._id);
}

  onAddToCart() {
    this.addedProduct.emit(this.comic);
  }

  desKart() {
    this.addedProduct.emit(this.comic);

  }

  darAmor(){
    this.addedlove.emit(this.comic);
    this.toggleAmor();
  }

  desDarAmor(){
    this.addedlove.emit(this.comic);
    this.toggleAmor();
  }

  mostrarDetalle(){
    this.showProduct.emit(this.comic.nombreId);
  }
toggleAmor(){
this.love=!this.love;
}


}
