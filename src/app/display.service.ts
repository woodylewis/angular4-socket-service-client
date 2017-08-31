import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DisplayService {
  public displayStream = new Subject<string>();

    constructor() { }

    public show(display: string): void {
        this.displayStream.next(display);
    }
}
