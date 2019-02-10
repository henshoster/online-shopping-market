import { AuthService } from "./../service/auth.service";
import { Component, OnInit } from "@angular/core";
import { LoginUser } from "../models/login-user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginUserData: LoginUser;
  constructor(private _auth: AuthService, private _router: Router) {
    this.loginUserData = {
      id: null,
      password: null
    };
  }

  ngOnInit() {}
  loginUser() {
    this.loginUserData.id = +this.loginUserData.id;
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/shopping"]);
      },
      err => console.log(err)
    );
  }
}
