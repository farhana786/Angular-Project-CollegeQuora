import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthSevice } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  constructor(private authService: AuthSevice) {}

  ngOnInit(){
    this.userIsAuthenticated= this.authService.getIsAuth();
    this.authListenerSubs= this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated= isAuthenticated;
    });
  }
  OnLogout(){
    this.authService.logout();
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}
