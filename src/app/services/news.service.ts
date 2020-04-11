import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  apiUrl = environment.apiUrl;

  private articleSource = new BehaviorSubject<any> ({}) ; 
 currentarticle = this.articleSource.asObservable(); 

  constructor(private http : HttpClient) { }
  
  
 getData(category): Observable<any> {
  return this.http.get<any>(
    this.apiUrl + "/news/" + category,
    this.httpOptions
  );
}




  setArticle(article ){
    this.articleSource.next(article) ; 
  }

 

}
