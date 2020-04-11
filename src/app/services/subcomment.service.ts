import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SubcommentService {
  apiUrl: string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private httpClient: HttpClient) {}

  newSubComment(obj, id): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl + "/subcomment/new/" + id,
      obj,
      this.httpOptions
    );
  }

  likeSubComment(id): Observable<any> {
    return this.httpClient.put<any>(
      this.apiUrl + "/subcomment/like/" + id,
      this.httpOptions
    );
  }

  dislikeSubComment(id): Observable<any> {
    return this.httpClient.put<any>(
      this.apiUrl + "/subcomment/dislike/" + id,
      this.httpOptions
    );
  }
}
