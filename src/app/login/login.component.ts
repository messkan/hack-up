import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  logIn() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.status === 200) {
          console.log(response.body);
          localStorage.setItem("token", response.body.token);

          this.router.navigate(["/login"]);
        }
      },
      (err) => {
        // error
      }
    );
  }
}
