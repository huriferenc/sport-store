import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://placehold.co/150",
        name: 'Cube Aim Race MTB 29"',
        price: 572.5,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://placehold.co/150",
        name: "Kiprun Men's Run 500 Short",
        price: 29.99,
        quantity: 4,
        id: 2,
      },
    ],
  };
  displayedColumns: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  dataSource: CartItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: CartItem[]): number {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  onAddQuantity(item: CartItem): void {}

  onRemoveQuantity(item: CartItem): void {}

  onClearCart(): void {}

  onRemoveFromCart(item: CartItem): void {}

  onCheckout(): void {}
}
