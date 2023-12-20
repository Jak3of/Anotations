import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zapatilla } from '../models/zapatilla';

@Injectable({
    providedIn: 'root'
})
export class ZapatillaService {

    zapatillas: Zapatilla[] = [];

    constructor(private http: HttpClient) {


     }

    getZapatillas(): Observable<Zapatilla[]> {
        return this.http.get<Zapatilla[]>('assets/data/zapatillas.json');
    }

    

    

    

    
}