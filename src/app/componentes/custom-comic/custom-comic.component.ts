import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';

import { Comic } from "src/models/comic.model";

@Component({
  selector: 'app-custom-comic',
  templateUrl: './custom-comic.component.html',
  styleUrls: ['./custom-comic.component.scss']
})
export class CustomComicComponent implements OnInit  {
  public status={
    delete:true,
    love:true,
    kart:true,
    info:true
  }


  public visible:boolean=true;
  public imagen:string='';
  @Input() nuevoStatus!:any;
  @Input() comic!:Comic;
  @Output() addedProduct = new EventEmitter<Comic>();
  @Output() addedlove = new EventEmitter<Comic>();
  @Output() noLove = new EventEmitter<string>();
  @Output() showProduct = new EventEmitter<string>();
  constructor() { }


ngOnInit(): void {
    this.status=this.nuevoStatus;
}
  onAddToCart() {
    this.addedProduct.emit(this.comic);
  }

  darAmor(){
    this.addedlove.emit(this.comic);
  }

  mostrarDetalle(){
    this.showProduct.emit(this.comic.nombreId);
  }

unlove(){
  this.noLove.emit(this.comic._id);
  this.visible = false;
}
}
