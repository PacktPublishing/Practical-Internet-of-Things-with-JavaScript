import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Globals } from '../app.global';

@Injectable()
export class SocketService {
	private socket;
	constructor(private auth: AuthService) {
		this.socket = io(Globals.BASE_API_URL, {
			'query': 'token=' + auth.getToken()
		});
	}

	getData(macAddress) {
		let observable = new Observable(observer => {
			this.socket.on('data:save:' + macAddress, (data) => {
				observer.next(data);
			});

			return (error) => {
				console.error(error);
				this.socket.disconnect();
			};
		})
		return observable;
	}
}
