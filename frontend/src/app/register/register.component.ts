import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  city: string;
  street: string;
  constructor() {}

  ngOnInit() {}
}
