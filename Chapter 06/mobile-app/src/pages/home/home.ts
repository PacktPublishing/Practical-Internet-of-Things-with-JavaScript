import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DevicesService } from '../../services/device.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

import { LoginPage } from '../login/login';
import { AddDevicePage } from '../add-device/add-device';
import { ViewDevicePage } from '../view-device/view-device';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	devices;

	constructor(public navCtrl: NavController,
		private authService: AuthService,
		private devicesService: DevicesService,
		private toastService: ToastService) {

	}

	ionViewDidLoad() {
		// check for auth
		if (!this.authService.isAuth) {
			// go to login page
			this.navCtrl.setRoot(LoginPage);
		} else {
			// fetch all devices
			this.getAll();
		}
	}

	getAll() {
		this.devicesService.getAll().subscribe((response) => {
			this.devices = response.json();
		});
	}

	addDevice() {
		this.navCtrl.push(AddDevicePage);
	}

	viewDevice(device) {
		this.navCtrl.push(ViewDevicePage, {
			device: device
		});
	}

	deleteDevice(device) {
		if (confirm('Are you certain?')) {
			this.devicesService.delete(device._id).subscribe((response) => {
				if (response.status === 204) {
					this.toastService.toggleToast('Delete Success');
					this.devices = undefined;
					this.getAll();
				} else {
					this.toastService.toggleToast('Delete failed, please try again!');
				}
			});
		}
	}

	logout() {
		if (this.authService.logout()) {
			this.navCtrl.setRoot(LoginPage);
			this.toastService.toggleToast('Logout Successful');
		} else {
			this.toastService.toggleToast('Logout Failed');
		}
	}

}
