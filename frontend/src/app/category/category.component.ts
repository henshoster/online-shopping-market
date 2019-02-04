import { Component, OnInit } from "@angular/core";
import { ApiConnectorService } from "../service/api-connector.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  category = [];
  constructor(private _api: ApiConnectorService) {}

  ngOnInit() {
    this._api.getCategory().subscribe(
      res => {
        this.category = res;
        console.log(this.category);
      },
      err => console.log(err)
    );
  }
}
