import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiConnectorService {
  private _categotyUrl = "http://localhost:3000/category";
  private _costumerUrl = "http://localhost:3000/costumer";
  private _productUrl = "http://localhost:3000/product";
  private _cartItemUrl = "http://localhost:3000/cart_item";

  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<any>(this._categotyUrl);
  }
  // getCategoryBySearch(id: string) {
  //   const searchTerm = id != "0" ? `/?search=${id}` : "";
  //   return this.http.get<any>(this._categotyUrl);
  // }

  getCostumer() {
    return this.http.get<any>(this._costumerUrl);
  }

  getProductsBySearch(id: string) {
    const searchTerm = id != "0" ? `/?search=${id}` : "";
    return this.http.get<any>(`${this._productUrl}${searchTerm}`);
  }

  getAllCartItmes() {
    return this.http.get<any>(this._cartItemUrl);
  }
  createNewCartItem(id, quantity, price) {
    const product_id = +id;
    const product_quantity = +quantity;
    const product_price = +price;
    const total_price = product_price * product_quantity;
    return this.http.post<any>(this._cartItemUrl, {
      product_id: product_id,
      quantity: product_quantity,
      total_price: total_price,
      shopping_cart_id: 1
    });
  }
}
