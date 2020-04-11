import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { QuestionsComponent } from "./questions/questions.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { SingupComponent } from "./singup/singup.component";
import { NewsItemComponent } from "./news-item/news-item.component";
import { FormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";
import { SourcesComponent } from "./sources/sources.component";
import { VerifyaccountComponent } from "./verifyaccount/verifyaccount.component";
import { ToastrModule } from 'ngx-toastr';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { environment } from 'src/environments/environment';

const   apiUrl: string = environment.apiUrl;
const   domain: string = environment.domain;


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    HomeComponent,
    NewsComponent,
    LoginComponent,
    SingupComponent,
    NewsItemComponent,
    SourcesComponent,
    VerifyaccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    InfiniteScrollModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('token');},
        whitelistedDomains: [domain],
        blacklistedRoutes: [apiUrl+'/user/login',apiUrl+'/user/signup']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
