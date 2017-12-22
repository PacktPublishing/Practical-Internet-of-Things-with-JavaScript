import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DevicesService } from '../../services/device.service';
import { DataService } from '../../services/data.service';
import { ToastService } from '../../services/toast.service';
import { SocketService } from '../../services/socket.service';

@IonicPage()
@Component({
	selector: 'page-view-device',
	templateUrl: 'view-device.html',
})
export class ViewDevicePage {
	device: any;
	data: Array<any>;
	toggleState: boolean = false;
	private subData: any;
	lastRecord: any;


	constructor(private navCtrl: NavController,
		private navParams: NavParams,
		private socketService: SocketService,
		private deviceService: DevicesService,
		private dataService: DataService,
		private toastService: ToastService) {
		this.device = navParams.get("device");
		console.log(this.device);
	}

	ionViewDidLoad() {
		this.deviceService.getOne(this.device._id).subscribe((response) => {
			this.device = response.json();
			this.getData();
		});
	}

	getData() {
		this.dataService.get(this.device.macAddress).subscribe((response) => {
			this.data = response.json();
			this.lastRecord = this.data[0]; // descending order data
			this.socketInit();
		});
	}

	socketInit() {
		this.subData = this.socketService.getData(this.device.macAddress).subscribe((data) => {
			if (this.data.length <= 0) return;
			this.data.splice(this.data.length - 1, 1); // remove the last record
			this.data.push(data); // add the new one
			this.lastRecord = data;
		});
	}

	ionViewDidUnload() {
		this.subData && this.subData.unsubscribe && this.subData.unsubscribe(); //unsubscribe if subData is defined
	}
}
