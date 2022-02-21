
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Comic } from 'src/models/comic.model';
@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent {
  public nuComics!:Comic[];
  public newComics!:Comic[];
  public total:number =0;

  @Input()
set changeComics(newComics:Comic[]){
  this.newComics = newComics;
  this.parseData()
}

@Input()
set changeTotal(newTotal:number){
  this.total= newTotal;
}

@Input() envio:boolean = false;

  constructor() { }

  parseData(): void{
    this.nuComics = this.newComics;
  }

}
