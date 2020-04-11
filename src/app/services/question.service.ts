import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Question } from "../../models/Question";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class QuestionService {
  apiUrl: string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  newQuestion(obj): Observable<Question> {
    return this.httpClient.post<any>(
      this.apiUrl + "/question/new",
      obj,
      this.httpOptions
    );
  }

  likeQuestion(id): Observable<any> {
    return this.httpClient.put<any>(
      this.apiUrl + "/question/like/" + id,
      this.httpOptions
    );
  }

  dislikeQuestion(id): Observable<any> {
    return this.httpClient.put<any>(
      this.apiUrl + "/question/dislike/" + id,
      this.httpOptions
    );
  }
}
