import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorService } from './error.service';
import { Model } from './model';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    constructor(private http: HttpClient, private error: ErrorService) { }

    public postData(model: Model): Observable<any> {
        return this.http.post('http://localhost:3100', JSON.stringify(model))
            .catch((res: HttpResponse<any>) => this.error.handleError(res));
    }
}