import { Costumer } from "./../models/costumer";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginUser } from "../models/login-user";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/register";
  private _loginUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user: Costumer) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: LoginUser) {
    return this.http.post<any>(this._loginUrl, user);
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  logoutUser() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
