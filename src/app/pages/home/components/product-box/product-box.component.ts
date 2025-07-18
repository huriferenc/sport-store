import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  constructor() {}

  onAddToCart(): void {}
}
