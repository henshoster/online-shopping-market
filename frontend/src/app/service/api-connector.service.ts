import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiConnectorService {
  private _categotyUrl = "http://localhost:3000/category";
  private _costumerUrl = "http://localhost:3000/costumer";

  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<any>(this._categotyUrl);
  }
  getCostumer() {
    return this.http.get<any>(this._costumerUrl);
  }
}
