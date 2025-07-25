import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subscription } from "rxjs";
import { MatDrawer } from "@angular/material/sidenav";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";
import { DrawerService } from "src/app/services/drawer.service";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  cols = 3;
  rowHeight: number = ROW_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  productsSubscription: Subscription | undefined;
  count = "12";
  sort = "desc";
  breakpointSubscription: Subscription | undefined;

  drawerMode: "side" | "over" = "side";
  drawerOpened = true;

  constructor(
    private cartService: CartService,
    private storeService: StoreService,
    private drawerService: DrawerService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        if (result.matches) {
          this.drawerMode = "over";
          this.drawerOpened = false;
        } else {
          this.drawerMode = "side";
          this.drawerOpened = true;
        }
      });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    this.drawerService.setDrawer(this.drawer);
  }

  getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((products) => {
        this.products = products;
      });
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[colsNum];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  onItemsCountChange(count: number): void {
    this.count = count.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
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

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
