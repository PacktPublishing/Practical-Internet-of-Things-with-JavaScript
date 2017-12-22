import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevicesService } from '../services/devices.service';
import { Params, ActivatedRoute } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { DataService } from '../services/data.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
	selector: 'app-device',
	templateUrl: './device.component.html',
	styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit, OnDestroy {
	device: any;
	data: Array<any>;
	toggleState: boolean = false;
	private subDevice: any;
	private subData: any;
	lastRecord: any;

	// line chart config
	public lineChartOptions: any = {
		responsive: true,
		legend: {
			position: 'bottom',
		}, hover: {
			mode: 'label'
		}, scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Time'
				}
			}],
			yAxes: [{
				display: true,
				ticks: {
					beginAtZero: true,
					// steps: 10,
					// stepValue: 5,
					// max: 70
				}
			}]
		},
		title: {
			display: true,
			text: 'Sensor Data vs. Time'
		}
	};
	public lineChartLegend: boolean = true;
	public lineChartType: string = 'line';
	public tempHumdData: Array<any> = [];
	public rainMoisData: Array<any> = [];
	public lineChartLabels: Array<any> = [];

	constructor(private deviceService: DevicesService,
		private socketService: SocketService,
		private dataService: DataService,
		private route: ActivatedRoute,
		private notificationsService: NotificationsService) { }

	ngOnInit() {
		this.subDevice = this.route.params.subscribe((params) => {
			this.deviceService.getOne(params['id']).subscribe((response) => {
				this.device = response.json();
				this.getData();
				this.socketInit();
			});
		});
	}

	getData() {
		this.dataService.get(this.device.macAddress).subscribe((response) => {
			this.data = response.json();
			this.lastRecord = this.data[0]; // descending order data
			this.genChart();
		});
	}

	socketInit() {
		this.subData = this.socketService.getData(this.device.macAddress).subscribe((data) => {
			if (this.data.length <= 0) return;
			this.data.splice(this.data.length - 1, 1); // remove the last record
			this.data.push(data); // add the new one
			this.lastRecord = data;
			this.genChart();
		});
	}

	ngOnDestroy() {
		this.subDevice.unsubscribe();
		this.subData ? this.subData.unsubscribe() : '';
	}

	genChart() {
		let data = this.data;
		let _thArr: Array<any> = [];
		let _rmArr: Array<any> = [];
		let _lblArr: Array<any> = [];

		let tmpArr: Array<any> = [];
		let humArr: Array<any> = [];
		let raiArr: Array<any> = [];
		let moiArr: Array<any> = [];

		for (var i = 0; i < data.length; i++) {
			let _d = data[i];
			tmpArr.push(_d.data.t);
			humArr.push(_d.data.h);
			raiArr.push(_d.data.r);
			moiArr.push(_d.data.m);
			_lblArr.push(this.formatDate(_d.createdAt));
		}

		// reverse data to show the latest on the right side
		tmpArr.reverse();
		humArr.reverse();
		raiArr.reverse();
		moiArr.reverse();
		_lblArr.reverse();

		_thArr = [
			{
				data: tmpArr,
				label: 'Temperature'
			},
			{
				data: humArr,
				label: 'Humidity %'
			}
		]

		_rmArr = [
			{
				data: raiArr,
				label: 'Rain Levels'
			},
			{
				data: moiArr,
				label: 'Moisture Levels'
			}
		]

		this.tempHumdData = _thArr;
		this.rainMoisData = _rmArr;

		this.lineChartLabels = _lblArr;
	}

	private formatDate(originalTime) {
		var d = new Date(originalTime);
		var datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
			d.getHours() + ":" + d.getMinutes();
		return datestring;
	}

}