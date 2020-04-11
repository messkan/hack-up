import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class LoginService {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email, password) {
    return this.http.post<any>(
      `${this.apiUrl}/user/login`,
      { email: email, password: password },
      { headers: this.headers, observe: "response" }
    );
  }
  getCurrentUser() : Observable <any>{
    return this.http.get<any>(
      this.apiUrl +'/user/current',
      { headers: this.headers }
    );

  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  loggedIn(): boolean {
    return localStorage.getItem("token") !== null;
  }
}
