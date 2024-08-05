import { Injectable } from "@angular/core";
import { HttpRequest } from "../utils/httpRequest";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor(private httpRequest: HttpRequest) {}

    login (username: string, password: string) {
        const res = this.httpRequest.post('login', {
            username,
            password
        });
        console.log('[auth]', res);
        return res;
    }
}

