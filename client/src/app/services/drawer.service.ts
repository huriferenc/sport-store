import { Injectable } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DrawerService {
  private drawerSubject = new BehaviorSubject<MatDrawer | null>(null);

  setDrawer(drawer: MatDrawer) {
    this.drawerSubject.next(drawer);
  }

  toggleDrawer() {
    const drawer = this.drawerSubject.getValue();
    drawer?.toggle();
  }
}
