import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  id : string ; 
  page : number = 1 ; 
  data : any ; 
  constructor(private newsService : NewsService,
              private http : HttpClient,
              private router : Router ,
              private route : ActivatedRoute
    ){
      
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id'); 
    console.log(this.id); 
      this.load();
  }


  load() {
    this.newsService
    .getData(this.id)
    .subscribe(data => {
      console.log(data);
      this.data = data;
    });
   
  }


  //"https://newsapi.org/v2/top-headlines?country=us&&category=health&&pageSize=5&page="+this.page+"&&apiKey=4d97ac9b1619491ca1eccf0687e0305e"
    
  onscroll() {
    this.page++;
    this.http
    .get(this.id)
    .subscribe(data => {
      for (const article of data['articles']) {
        this.data.articles.push(article);
      }
     // event.target.complete();
      console.log(this.data); 
    });
  
  }


   gotoitem(article){
      this.newsService.setArticle(article);
      this.router.navigate(['/newsItem'])
   }



}
