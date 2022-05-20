import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthSevice } from "./auth.service";
@Injectable()
export class AuthInterseptor implements HttpInterceptor{
    constructor(private authService: AuthSevice){}

    intercept(req:HttpRequest<any>, next:HttpHandler){
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('authorization','Bearer ' + authToken)
        });
        return next.handle(authRequest);
    }
}