import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  apiUrl: string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private httpClient: HttpClient) {}
  
  mp : Map<string , number >  ; 


  newComment(obj, id): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl + "/comment/new/" + id,
      {'title': obj},
      this.httpOptions
    );
  }

  likeComment(id): Observable<any> {
    return this.httpClient.put<any>(
      this.apiUrl + "/comment/like/" + id,
      this.httpOptions
    );
  }

  dislikeComment(id): Observable<any> {
    return this.httpClient.put<any>(
      this.apiUrl + "/comment/dislike/" + id,
      this.httpOptions
    );
  }
}
