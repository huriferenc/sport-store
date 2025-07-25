import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTreeModule } from "@angular/material/tree";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { LayoutModule } from "@angular/cdk/layout";

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductsHeaderComponent } from "./pages/home/components/products-header/products-header.component";
import { FiltersComponent } from "./pages/home/components/filters/filters.component";
import { ProductBoxComponent } from "./pages/home/components/product-box/product-box.component";
import { CartComponent } from "./pages/cart/cart.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

import { CartService } from "./services/cart.service";
import { StoreService } from "./services/store.service";
import { DrawerService } from "./services/drawer.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    LayoutModule,
  ],
  providers: [CartService, StoreService, DrawerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
