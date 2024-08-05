import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public jwtHelper: JwtHelperService = new JwtHelperService();
    // Do không có file app.module.ts để import 
    // nên ko khai báo jwtHelper vào constructor
    constructor() {}
    // ...
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }
}