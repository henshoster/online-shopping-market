import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ApiConnectorService } from "../service/api-connector.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  category = [];
  @Output() updateCategories: EventEmitter<any> = new EventEmitter();
  constructor(private _api: ApiConnectorService, private _router: Router) {}

  ngOnInit() {
    this._api.getCategory().subscribe(
      res => {
        this.category = res;
        this.updateCategories.emit(this.category);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(["/login"]);
          }
        }
      }
    );
  }
}
