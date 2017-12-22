import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Globals } from '../app.global';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {
	token;
	dataLimit = 30;

	constructor(private http: Http,
		private auth: AuthService) {
	}

	private createAuthorizationHeader(headers: Headers) {
		headers.append('Authorization', 'Bearer ' + this.auth.getToken());
		headers.append('Accept-Language', 'en_US');
		headers.append('Content-Type', 'application/json');
	}

	create(data): Observable<Response> {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.post(Globals.BASE_API_URL + 'api/v1/data', data, {
			headers: headers
		});
	}

	get(id): Observable<Response> {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.get(Globals.BASE_API_URL + 'api/v1/data/' + id + '/' + this.dataLimit, {
			headers: headers
		});
	}

}
