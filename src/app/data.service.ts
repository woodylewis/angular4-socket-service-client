import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Model } from './model';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    public postData(model: Model): Observable<any> {
        return this.http.post('http://localhost:3100', { model });
    }
}