import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FormComponent } from './form.component';
import { DisplayService } from './display.service';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = '';
  public displaySubscription: Subscription;

  constructor(public display: DisplayService) {}

  public ngOnInit(): void {
    this.displaySubscription = this.display.displayStream
        .subscribe((display: string) => {
          console.log('app display ', display);
          this.title = display;
        });
  }

  public ngOnDestroy() {
    this.displaySubscription.unsubscribe();
  }
}
