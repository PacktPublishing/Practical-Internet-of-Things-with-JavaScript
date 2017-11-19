import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevicesService } from '../services/devices.service';
import { Params, ActivatedRoute } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-device',
	templateUrl: './device.component.html',
	styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit, OnDestroy {
	device: any;
	data: any;
	private subDevice: any;
	private subData: any;

	constructor(private deviceService: DevicesService,
		private socketService: SocketService,
		private dataService: DataService,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.subDevice = this.route.params.subscribe((params) => {
			this.deviceService.getOne(params['id']).subscribe((response) => {
				this.device = response.json();
				this.getData();
				this.socketInit();
			});
		});
	}

	getData(){
		this.dataService.get(this.device._id).subscribe((response) =>{
			this.data = response.json();
		});
	}

	socketInit() {
		this.subData = this.socketService.getData(this.device._id).subscribe((message) => {
			console.log('Message', message);
		});
	}

	ngOnDestroy() {
		this.subDevice.unsubscribe();
		this.subData ? this.subData.unsubscribe() : '';
	}

}
