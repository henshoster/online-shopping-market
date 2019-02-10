import { Component, OnInit, Input } from "@angular/core";
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
  @Input() set categories(categories) {
    this._categories = categories;
  }
  products: [];
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
          }
        }
      );
    });
  }
}
