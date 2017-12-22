import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Globals } from '../app.global';
import { NotificationsService } from 'angular2-notifications';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	user = {
		email: '',
		password: ''
	}
	constructor(private authService: AuthService,
		private router: Router,
		private notificationsService: NotificationsService) { }

	login() {
		this.authService.login(this.user).subscribe((response) => {
			let resp = response.json();
			this.notificationsService.success('Login Successful');
			if (this.authService.initSession(resp.token, resp.user)) {
				this.router.navigateByUrl('/home');
			}
		}, (err) => {
			this.notificationsService.error('Login Failed!');
			console.error(err);
			this.authService.destroySession();
		});
	}
}
