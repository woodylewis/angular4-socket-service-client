import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorService } from './error.service';
import { Model } from './model';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    public cms_test = 'http://localhost:1337/cmstest';

    constructor(private http: HttpClient, private error: ErrorService) { }

    public postRecord(model: Model): Observable<any> {
        return this.http.post(this.cms_test, JSON.stringify(model))
            .catch((res: HttpResponse<any>) => this.error.handleError(res));
    }
    /*
    public getRecord(recordId: any): Observable<any> {
        return this.http.post('http://localhost:3100/getRecord', JSON.stringify(recordId))
            .catch((res: HttpResponse<any>) => this.error.handleError(res));
    }
    public editRecord(recordId: any): Observable<any> {
        return this.http.post('http://localhost:3100/editRecord', JSON.stringify(recordId))
            .catch((res: HttpResponse<any>) => this.error.handleError(res));
    }
    public deleteRecord(recordId: any): Observable<any> {
        return this.http.post('http://localhost:3100/deleteRecord', JSON.stringify(recordId))
            .catch((res: HttpResponse<any>) => this.error.handleError(res));
    }
    public getList(): Observable<any> {
        return this.http.get(this.gateway)
            .catch((res: HttpResponse<any>) => this.error.handleError(res));
    }
    */
}