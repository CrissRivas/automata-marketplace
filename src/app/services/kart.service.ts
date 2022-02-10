import { Injectable } from '@angular/core';
import { Comic } from 'src/models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class KartService {
  private myShoppingCart: Comic[] = [];
  constructor() { }

  addProduct(product: Comic) {
    this.myShoppingCart.push(product);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.precio, 0);
  }
}
