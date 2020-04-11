import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  logIn() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.status === 200) {
          console.log(response.body);
          localStorage.setItem("token", response.body.token);
          this.showToaster();
          this.router.navigate(["/home"]);
        }
      },
      (err) => {
        // error
      }
    );
  }
  showToaster() {
    this.toaster.success("You're welcome ");
  }
}
