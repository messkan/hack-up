import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  result: string = '';
  user : any  = {
      name : 'hamdi rhibi' , 
      verified : true ,
      //userImage : 'https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg'
  }
  constructor(private wowService: NgwWowService,private toastr: ToastrService,private router : Router) {
    this.wowService.init();
  }


  ngOnInit() {
      if (!localStorage.getItem('token')) {
          this.router.navigate(['/login'])
      }
  }
  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
  }






}
