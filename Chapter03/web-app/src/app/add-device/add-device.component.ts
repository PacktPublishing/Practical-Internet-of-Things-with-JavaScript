import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../services/devices.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
	selector: 'app-add-device',
	templateUrl: './add-device.component.html',
	styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
	device = {
		name: '',
		macAddress: ''
	}
	constructor(private devicesService: DevicesService,
		private router: Router,
		private notificationsService: NotificationsService) { }

	ngOnInit() {

	}

	create() {
		this.devicesService.create(this.device).subscribe((response) => {
			if (response.json().__v === 0) {
				this.notificationsService.success('Device creation Successful');
				// device has bee successfully created. 
				// redirect user
				this.router.navigateByUrl('/home');
			}
		})
	}

}
