import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../../models/User";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.css"],
})
export class SingupComponent implements OnInit {
  user: User = new User();
  error: String;

  constructor(
    private userService: UserService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    this.userService.SignUp(this.user).subscribe(
      (res) => {
        this.showToaster();

        this.router.navigate(["/login"]);
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }

  showToaster() {
    this.toaster.success("You're welcome , login to our site");
  }
}
