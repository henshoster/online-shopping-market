import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  constructor() {}

  _shopping_cart_items: any[] = [];

  displayedColumns: string[] = ["id", "total_price"];

  @Input() set shopping_cart_items(shopping_cart_items) {
    this._shopping_cart_items = shopping_cart_items;
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this._shopping_cart_items
      .map(t => t.total_price)
      .reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
    console.log(this._shopping_cart_items);
  }
}
