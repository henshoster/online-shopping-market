import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping",
  templateUrl: "./shopping.component.html",
  styleUrls: ["./shopping.component.scss"]
})
export class ShoppingComponent implements OnInit {
  constructor() {}
  categories: [];
  updatedCategories(e) {
    this.categories = e;
  }
  ngOnInit() {}
}
