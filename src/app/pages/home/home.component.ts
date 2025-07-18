import { Component, OnInit } from "@angular/core";

const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight: number = ROW_HEIGHT[this.cols];
  category: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[colsNum];
  }

  onShowCategory(newCatergory: string): void {
    this.category = newCatergory;
  }
}
