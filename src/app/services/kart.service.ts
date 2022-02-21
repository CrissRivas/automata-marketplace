import { Injectable } from '@angular/core';
import { Comic } from 'src/models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class KartService {
  private myShoppingCart: Comic[] = [];
  constructor() { }


  getTotal(comics:Comic[]) {
    this.myShoppingCart = comics;
    return this.myShoppingCart.reduce((sum, item) => sum + item.precio, 0);
  }
}
