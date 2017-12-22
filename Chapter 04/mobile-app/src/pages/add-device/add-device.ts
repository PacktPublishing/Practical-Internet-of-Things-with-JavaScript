import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ToastService } from '../../services/toast.service';
import { DevicesService } from '../../services/device.service';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-add-device',
	templateUrl: 'add-device.html',
})
export class AddDevicePage {
	device = {
		name: '',
		macAddress: ''
	}

	constructor(public navCtrl: NavController,
		private devicesService: DevicesService,
		private toastService: ToastService) {
	}

	create() {
		this.devicesService.create(this.device).subscribe((response) => {
			if (response.json().__v === 0) {
				this.toastService.toggleToast('Device creation Successful');
				// device has bee successfully created. 
				// redirect user
				this.navCtrl.setRoot(HomePage);
			}
		})
	}


}
