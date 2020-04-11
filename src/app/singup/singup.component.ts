import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../../models/User";
import { Router } from "@angular/router";

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.css"],
})
export class SingupComponent implements OnInit {
  user: User = new User();
  signup: boolean = false;
  error: String;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  register() {
    this.signup = true;
    this.userService.SignUp(this.user).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }
}
