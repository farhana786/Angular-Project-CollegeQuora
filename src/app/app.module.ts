import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { HomeComponent } from './Component/home/home.component';
import { Post } from './Component/posts/post.model';
import { PostCreateComponent } from './Component/posts/post-create/post-create.component';
import { ReplyComponent } from './Component/posts/reply/reply.component';
import { PostsComponent } from './Component/posts/posts.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/login/signup.component';
import { AuthInterseptor } from './auth/auth-interceptor';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { ReplyCreateComponent } from './Component/reply-create/reply-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent,
    PostsComponent,
    PostCreateComponent,
    ReplyComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AboutUsComponent,
    ReplyCreateComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatPaginatorModule

  ],

  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterseptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
