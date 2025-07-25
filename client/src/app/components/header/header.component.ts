import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, Input } from "@angular/core";
import { map, Observable, shareReplay } from "rxjs";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";
import { DrawerService } from "src/app/services/drawer.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  isHandset$: Observable<boolean>;
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }

  constructor(
    private cartService: CartService,
    private drawerService: DrawerService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  }

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
