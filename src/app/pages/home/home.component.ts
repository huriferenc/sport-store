import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";

const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight: number = ROW_HEIGHT[this.cols];
  category: string | undefined;
  product: Product = {
    id: 1,
    title: "Cube Aim Race MTB 29",
    price: 572.5,
    category: "Cycling",
    description: "Description",
    image: "https://placehold.co/150",
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[colsNum];
  }

  onShowCategory(newCatergory: string): void {
    this.category = newCatergory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
