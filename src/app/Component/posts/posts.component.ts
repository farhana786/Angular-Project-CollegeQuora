
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './post.model';
import{PostService}  from './posts.service';
import { Subscription } from 'rxjs';
import { AuthSevice } from 'src/app/auth/auth.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit,OnDestroy {
posts: Post[] = [];
private postsSub!: Subscription;
isLoading = false;
private authStatusSub: Subscription;
userIsAuthenticated= false;
totalPosts = 0;
postsPerPage = 2;
currentPage = 1;
userId: string;
pageSizeOptions = [1, 2, 5, 10];

// myDate = Date.now();


  constructor(public postsService: PostService, private authService: AuthSevice) { 

  }

  ngOnInit(){
    this.isLoading=true;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
    this.userId= this.authService.getUserId();
    
    this.postsSub = this.postsService
    .getPostUpdateListener()
    .subscribe((postData: {posts: Post[], postCount: number}) =>{
      this.isLoading=false;
      this.totalPosts = postData.postCount;
      this.posts = postData.posts;
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub= this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated= isAuthenticated;
      this.userId= this.authService.getUserId();
    });
  }

onChangedPage(pageData: PageEvent){
  this.isLoading = true;
  this.currentPage = pageData.pageIndex + 1;
  this.postsPerPage = pageData.pageSize;
  this.postsService.getPosts(this.postsPerPage, this.currentPage);
}

onDelete(postId: any){
  this.isLoading = true;
  this.postsService.deletePost(postId).subscribe(() => {
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
  });
}

ngOnDestroy(){
  this.postsSub.unsubscribe();
  this.authStatusSub.unsubscribe();
}
}
