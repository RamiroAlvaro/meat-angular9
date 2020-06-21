import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MEAT_API } from '../app.api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService,
              private http: HttpClient) { }

  cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  increaseQty(item: CartItem) {
    this.shoppingCartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.shoppingCartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

  itemsValue(): number {
    return this.shoppingCartService.total();
  }

  checkOrder(order: Order): Observable<string> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
                    .pipe(map(order => order.id));
  }

  clear() {
    this.shoppingCartService.clear();
  }
}
