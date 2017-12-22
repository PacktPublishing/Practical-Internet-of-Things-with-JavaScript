import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {

	user = {
		name: '',
		email: '',
		password: ''
	}
	constructor(private authService: AuthService,
		private router: Router,
		private notificationsService: NotificationsService) { }

	register() {
		this.authService.register(this.user).subscribe((response) => {
			let resp = response.json();
			this.notificationsService.success('Registartion Successful');
			if (this.authService.initSession(resp.token, resp.user)) {
				this.router.navigateByUrl('/home');
			}
		}, (err) => {
			this.notificationsService.error('Registartion Failed!');
			console.error(err);
			this.authService.destroySession();
		});
	}
}
