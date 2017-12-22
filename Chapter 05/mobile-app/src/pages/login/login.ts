import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	user = {
		email: '',
		password: ''
	}

	constructor(private navCtrl: NavController,
		private authService: AuthService,
		private toastService: ToastService) {
	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad LoginPage');
	}

	login() {
		this.authService.login(this.user).subscribe((response) => {
			let resp = response.json();
			this.toastService.toggleToast('Login Successful');
			if (this.authService.initSession(resp.token, resp.user)) {
				this.navCtrl.setRoot(HomePage);
			}
		}, (err) => {
			this.toastService.toggleToast('Login Failed!');
			console.error(err);
			this.authService.destroySession();
		});
	}

}
