import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) { }


    login(user: any): Observable<any> {

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        } );
        return this.http.post<any>('https://dummyjson.com/auth/login', user, {headers: headers});
    }
}