import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import { Globals } from '../app.global';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthService {
	authEE: EventEmitter<boolean> = new EventEmitter();
	isAuth: boolean = false;

	constructor(private http: Http,
		private lsService: LocalStorageService,
		private notificationsService: NotificationsService) { }

	// Register User
	register(user): Observable<Response> {
		return this.http.post(Globals.BASE_API_URL + 'api/v1/users', user);
	}

	// Login User
	login(user): Observable<Response> {
		return this.http.post(Globals.BASE_API_URL + 'auth/local', user);
	}

	// Logout User
	logout(): boolean {
		return this.destroySession();
	}

	// Initailize a new session on the client side
	initSession(token, user): boolean {
		try {
			this.lsService.set(Globals.API_AUTH_TOKEN, token);
			this.lsService.set(Globals.AUTH_USER, user);
			this.setAuthState(true);
			return true;
		} catch (ex) {
			console.error(ex);
			return false;
		}
	}

	// Clean the session from client side
	destroySession(): boolean {
		try {
			this.lsService.remove(Globals.API_AUTH_TOKEN);
			this.lsService.remove(Globals.AUTH_USER);
			this.setAuthState(false);
			return true; // try succeeded
		}
		catch (ex) {
			console.error(ex);
			return false;
		}
	}

	// Get token from storage
	getToken() {
		return this.lsService.get(Globals.API_AUTH_TOKEN);
	}

	// Get user object from storage
	getUser() {
		return this.lsService.get(Globals.AUTH_USER);
	}

	// Get the auth status
	isAuthenticated(): Observable<boolean> {
		return new Observable<boolean>((observer) => {
			// No Token No Request
			if (!this.getToken()) {
				this.setAuthState(false);
				observer.next(false);
				observer.complete();
				return;
			}

			// If isAuth is defined,  
			// we are good to go
			if (this.isAuth) {
				this.setAuthState(true);
				observer.next(true);
				observer.complete();
				return;
			}

			// Refresh the session
			let headers = new Headers();
			this.createAuthorizationHeader(headers);
			this.http.get(Globals.BASE_API_URL + 'api/v1/users/me', {
				headers: headers
			}).subscribe((response) => {
				// repopulate the user object
				this.lsService.set(Globals.AUTH_USER, response.json());
				this.setAuthState(true);
				observer.next(!!(response.json()._id));
				observer.complete();
			}, (error) => {
				this.notificationsService.error('Auto Login Failed!');
				this.setAuthState(false);
				this.destroySession(); // remove expired token
				observer.next(false);
				observer.complete();
			});
		});
	}

	// Private Helpers 
	// set Auth State
	private setAuthState(bool) {
		this.isAuth = bool;
		this.authEE.emit(bool);
	}

	// Create requried headers
	private createAuthorizationHeader(headers: Headers) {
		headers.append('Authorization', 'Bearer ' + this.getToken());
		headers.append('Accept-Language', 'en_US');
		headers.append('Content-Type', 'application/json');
	}
}
