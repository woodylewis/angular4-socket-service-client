import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    public postData(): Observable<any> {
        let params: any = {
            one: 'foo',
            two: 'bar'
        }
        
        console.log('POST DATA ');
        return this.http.post('http://localhost:3100', { body: JSON.stringify(params)});
        //.catch(console.log('error'));
    }
}