import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})
export class HttpRequest {
    private BASE_URL = 'http://localhost:8080/';

    constructor(private http: HttpClient) {}

    get(path: string, option?: object): any {
        return this.http.get(this.BASE_URL + path, option);
    }
    
    post(path: string, data: any, option?: object): any {
        return this.http.post(this.BASE_URL + path, data, option);
    }
    
    put(path: string, data: any, option?: object): any {
        return this.http.put(this.BASE_URL + path, data, option);
    }
    
    delete(path: string, option?: object): any {
        return this.http.delete(this.BASE_URL + path, option);
    }
}