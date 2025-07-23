import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
  template: "<h1>404</h1><p>Page not found!</p>",
  styles: [],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
