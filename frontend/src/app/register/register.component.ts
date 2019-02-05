import { AuthService } from "./../service/auth.service";
import { Costumer } from "./../models/costumer";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerUserDate: Costumer;
  constructor(private _auth: AuthService, private _router: Router) {
    this.registerUserDate = {
      id: null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      city: null,
      street: null,
      role: 0
    };
  }

  ngOnInit() {}
  registerUser() {
    this.registerUserDate.id = +this.registerUserDate.id;
    console.log(this.registerUserDate);
    this._auth.registerUser(this.registerUserDate).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/category"]);
      },
      err => console.log(err)
    );
  }
}
