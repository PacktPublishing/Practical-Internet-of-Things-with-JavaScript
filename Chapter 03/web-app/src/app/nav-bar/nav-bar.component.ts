import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
	isAuthenticated: boolean = false;

	constructor(private authService: AuthService,
		private router: Router,
		private notificationsService: NotificationsService) {
		// subscribe to auth events
		this.authService.authEE.subscribe((authState) => {
			this.isAuthenticated = authState;
		});
		// // check auth state
		this.authService.isAuthenticated().subscribe((isAuth) => {
			console.info('User Auth State:', isAuth ? 'Logged In' : 'Logged Off');
			if (isAuth) {
				this.notificationsService.success('Login Successful!');
				var u = location.href;
				if (u.indexOf('login') > 0 || u.indexOf('register') > 0) {
					this.router.navigateByUrl('/home');
				}
			}
		});
	}

	logout() {
		console.log('called');
		if (this.authService.logout()) {
			this.router.navigateByUrl('login');
		} else {
			console.error('Logout Failed');
		}
	}
}
