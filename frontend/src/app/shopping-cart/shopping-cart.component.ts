import { ApiConnectorService } from "./../service/api-connector.service";
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { CartItem } from "../models/cart-item";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  constructor(private _api: ApiConnectorService) {
    this._shopping_cart_items = [];
  }

  dataSource = new MatTableDataSource<CartItem>();
  flag: boolean = false;
  private _somethingHappenFlag: boolean;
  @Input() set somethingHappenFlag(value: boolean) {
    this._somethingHappenFlag = value;
    this.dataSource.data = this._shopping_cart_items;
  }

  private _shopping_cart_items: CartItem[];
  @Input() set shopping_cart_items(value: CartItem[]) {
    this._shopping_cart_items = value;
    this.dataSource.data = this._shopping_cart_items;
  }

  @Output() emitRemoveCartItem: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    const initialInterVal = setInterval(() => {
      if (this._shopping_cart_items) {
        this.dataSource.data = this._shopping_cart_items;
        clearInterval(initialInterVal);
      }
    }, 300);
  }

  displayedColumns: string[] = [
    "product_name",
    "quantity",
    "total_price",
    "id"
  ];

  removeCartItem(id) {
    this._api.deleteCartItem(id).subscribe(
      res => {
        console.log(res);
        this.emitRemoveCartItem.emit(id);
      },
      err => console.log(err)
    );
  }

  getTotalCost() {
    // if (!this.flag) {
    //   this.flag = true;
    //   setTimeout(() => {
    //     this.refresh();
    //     this.flag = false;
    //   }, 200);
    // }
    return this._shopping_cart_items
      ? this._shopping_cart_items
          .map(t => t.total_price)
          .reduce((acc, value) => acc + value, 0)
      : null;
  }
}
