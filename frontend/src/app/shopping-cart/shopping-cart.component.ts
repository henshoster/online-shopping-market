import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { CartItem } from "../models/cart-item";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  constructor() {
    this._shopping_cart_items = [];
  }
  dataSource = new MatTableDataSource<CartItem>();
  flag: boolean = false;
  refresh() {
    this.dataSource.data = this._shopping_cart_items;
  }
  @Input() _shopping_cart_items: CartItem[];
  ngOnInit() {
    this.refresh();
  }

  displayedColumns: string[] = [
    "product_name",
    "quantity",
    "total_price",
    "id"
  ];
  removeCartItem(id) {
    console.log(id);
  }
  /** Gets the total cost of all transactions. */
  i = 0;
  getTotalCost() {
    if (!this.flag) {
      this.flag = true;
      setTimeout(() => {
        this.refresh();
        this.flag = false;
      }, 200);
    }
    return this._shopping_cart_items
      ? this._shopping_cart_items
          .map(t => t.total_price)
          .reduce((acc, value) => acc + value, 0)
      : null;
  }
}
