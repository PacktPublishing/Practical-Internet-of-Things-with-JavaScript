import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DevicesService } from '../services/devices.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	devices;

	constructor(private authService: AuthService,
		private router: Router,
		private devicesService: DevicesService) { }

	ngOnInit() {
		// check for auth
		if (!this.authService.isAuth) {
			// go to login page
			this.router.navigateByUrl('/');
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
		this.router.navigateByUrl('/add-device');
	}

	viewDevice(device) {
		this.router.navigate(['/view-device/', device._id]);
	}

	deleteDevice(device) {
		if (confirm('Are you certain?')) {
			this.devicesService.delete(device._id).subscribe((response) => {
				if (response.status === 204) {
					this.devices = undefined;
					this.getAll();
				} else {
					alert('Delete failed, please try again!');
				}
			});
		}
	}

}
