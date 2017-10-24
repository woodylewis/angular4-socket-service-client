import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { DataService } from './data.service';
import { SocketService } from './socket.service';
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentTypeHeaderInterceptor } from "./content-type-header.interceptor";
import { Subscription } from 'rxjs/Subscription';
import { DisplayService } from './display.service';
import { ErrorService } from './error.service';

const routes: Routes = [
    { path: '*', component: AppComponent }/*,
    { path: 'form', component: FormComponent }*/
]; 

@NgModule({
  declarations: [
    AppComponent, FormComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule
  ],
  providers: [ DataService, DisplayService, ErrorService, SocketService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ContentTypeHeaderInterceptor,
        multi: true
    }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
