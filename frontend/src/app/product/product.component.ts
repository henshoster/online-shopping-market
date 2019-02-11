import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ApiConnectorService } from "../service/api-connector.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _api: ApiConnectorService
  ) {}

  categorySelected: string;
  _categories: [];
  products: [];

  @Output() emitNewCartItem: EventEmitter<any> = new EventEmitter();
  @Input() set categories(categories) {
    this._categories = categories;
  }

  newCartItem(product_id, product_quantity, product_price, product_name) {
    if (product_id && product_quantity && product_price) {
      this._api
        .createNewCartItem(
          product_id,
          product_quantity,
          product_price,
          product_name
        )
        .subscribe(
          res => {
            const insertedId = res.insertId;
            this.emitNewCartItem.emit({
              product_id,
              product_quantity,
              product_price,
              product_name,
              insertedId
            });
          },
          err => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this._router.navigate(["/login"]);
              }
            } else {
              console.log(err);
            }
          }
        );
    }
  }

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get("id");
      this.categorySelected = id;
      this._api.getProductsBySearch(this.categorySelected).subscribe(
        res => {
          this.products = res;
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(["/login"]);
            }
          } else {
            console.log(err);
          }
        }
      );
    });
  }
}
