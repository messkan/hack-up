import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../../models/User";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  SignUp(obj): Observable<User> {
    return this.httpClient.post<any>(
      this.apiUrl + "/user/signup",
      obj,
      this.httpOptions
    );
  }
}
