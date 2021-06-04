import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart = new BehaviorSubject<Number>(0);

  cart$ = this.cart.asObservable();

  constructor() {}

  addToCart(number){
    this.cart.next(number);
  }
}
