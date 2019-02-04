import { Costumer } from "./../models/costumer";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginUser } from "../models/login-user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/costumer";
  private _loginUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient) {}

  registerUser(user: Costumer) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: LoginUser) {
    return this.http.post<any>(this._loginUrl, user);
  }
}
