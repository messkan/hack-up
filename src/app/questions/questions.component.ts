import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { LoginService } from '../services/login.service';
import { QuestionService } from '../services/question.service';
import { User } from 'src/models/User';
import { SubcommentService } from '../services/subcomment.service';
import { CommentService } from '../services/comment.service';





@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})




export class QuestionsComponent implements OnInit {
comment : string ; 
user : User ; 
comments : any ; 
post: string ; 
posts : any [];
mp : Map<string , number > ; 

  constructor(private postServices : PostService ,
      private loginService : LoginService,
      private questionSerice : QuestionService,
      private subComment : SubcommentService , 
      private CommentService : CommentService
    ) { }



  loadPosts(){
    this.questionSerice.findAll().subscribe(data=>{
      this.posts=data ; 
      console.log(data)
    })
  }
  loadUser(){
    this.loginService.getCurrentUser().subscribe(data => {
      this.user = data; 
      console.log(this.user)
  })

  }

  ngOnInit() {
  this.loadUser();
  this.loadPosts(); 
  }


 addcomment(postid){
  if (this.comment.length>0){
    this.CommentService.newComment(this.mp[postid],postid).subscribe(data=>{
      console.log(data); 
    })
    this.loadPosts() ; 
    this.comment='';
  }
 }



  postSomething(){
    if (this.post.length>0) {
    // this.posts.push({
    //   userName : this.user,
    //   userImage :"https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg",
    //   datePost : '19/04/2020' ,
    //   postDescription : this.post 
    //   ,like : 0 , 
    //   dislike : 0 ,
    //   comments :  []
    // })
    // this.posts.reverse();
    console.log(this.post)
    this.questionSerice.newQuestion({'title':this.post}).subscribe(data=>{
      console.log(data);
    }) ; 
    this.loadPosts() ; 
    this.post=''; 
  
  }

  }




}
