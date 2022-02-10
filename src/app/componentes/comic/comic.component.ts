import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';
import { Comic } from "../../../models/comic.model";

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent  {
  public imagen:string='';
  @Input() comic!:Comic;
  @Output() addedProduct = new EventEmitter<Comic>();
  @Output() addedlove = new EventEmitter<Comic>();
  @Output() showProduct = new EventEmitter<string>();
  constructor() { }



  onAddToCart() {
    this.addedProduct.emit(this.comic);
  }

  darAmor(){
    this.addedlove.emit(this.comic);
  }

  mostrarDetalle(){
    this.showProduct.emit(this.comic.nombreId);
  }
}
