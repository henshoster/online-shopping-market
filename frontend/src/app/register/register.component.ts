import { AuthService } from "./../service/auth.service";
import { Costumer } from "./../models/costumer";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerUserDate: Costumer;
  constructor(private _auth: AuthService) {
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
    this._auth
      .registerUser(this.registerUserDate)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
