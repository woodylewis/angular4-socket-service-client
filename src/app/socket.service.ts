import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as io from 'socket.io-client';
import SocketIOClient from 'socket.io-client';
import Socket = SocketIOClient.Socket;

@Injectable()
export class SocketService {
    private socketServer: Socket;
    private socket: Socket;

    constructor() {
        this.socketServer = io('http://localhost:3002');
        this.socketServer
            .on('wls_client', (data: any) => {
                this.socket = data;
                console.log('socket = ', this.socket);
            });
    }

    private getSocket(): Observable<any> {
        return new Observable((observer: Observer<any>) => {
            if (!this.socket) {
                this.socketServer.on('wls_client', (data: any) => {
                    this.socket = data;
                    console.log('getSocket: ' + JSON.stringify(data));
                    observer.next(data);
                });
            } else {
                observer.next(this.socket);
            }
        })
    }

    private send(message: string, data: any): void {
        this.socketServer.emit(message, data);
    }

    public subscribe(): void {
    }
}