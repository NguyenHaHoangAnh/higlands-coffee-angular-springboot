import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { config } from '../config/config';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {}

    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
            localStorage.removeItem('id');
            localStorage.removeItem('token');
            this.router.navigate([config.routes.login]);
            return false;
        }
        return true;
    }
}