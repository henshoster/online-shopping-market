import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiConnectorService } from "../service/api-connector.service";
import { CartItem } from "../models/cart-item";

@Component({
  selector: "app-shopping",
  templateUrl: "./shopping.component.html",
  styleUrls: ["./shopping.component.scss"]
})
export class ShoppingComponent implements OnInit {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _api: ApiConnectorService
  ) {}

  categories: [];
  shopping_cart_id: number;
  shopping_cart_items: CartItem[];
  somethingHappenFlag: boolean = true;

  updatedCategories(e) {
    this.categories = e;
  }
  createNewCartItem(e) {
    const id = e.insertedId;
    const product_id = e.product_id;
    const quantity = e.product_quantity;
    const shopping_cart_id = 1;
    const total_price = e.product_price * quantity;
    const product_name = e.product_name;
    const newcartObj: CartItem = {
      id,
      product_id,
      quantity,
      shopping_cart_id,
      total_price,
      product_name
    };
    this.shopping_cart_items.push(newcartObj);
    this.somethingHappenFlag = !this.somethingHappenFlag;
  }

  removeCartItem(_id) {
    const id = _id;
    this.shopping_cart_items = this.shopping_cart_items.filter(
      obj => obj.id != id
    );
  }

  ngOnInit() {
    //need to be added get by specific id
    this._api.getAllCartItmes().subscribe(
      res => {
        this.shopping_cart_items = res;
      },
      err => console.log(err)
    );
  }
}
