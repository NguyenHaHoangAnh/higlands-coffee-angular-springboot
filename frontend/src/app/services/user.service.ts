import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpRequest } from "../utils/httpRequest";

@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private httpRequest: HttpRequest) {}

    // User
    private userInit = new BehaviorSubject(undefined);
    user = this.userInit.asObservable();

    setUser(newUser: any): void {
        this.userInit.next(newUser);
        console.log('[user service] user changed', newUser);        
    }

    getUserById(id: string) {
        const res = this.httpRequest.get(`user/${id}`);
        console.log('[user by id]', res);
        return res;
    }
}