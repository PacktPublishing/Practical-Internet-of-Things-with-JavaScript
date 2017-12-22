import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-device-template',
	templateUrl: './device-template.component.html',
	styleUrls: ['./device-template.component.css']
})
export class DeviceTemplateComponent implements OnInit {
	@Input() device;
	@Output() deleteDevice = new EventEmitter();
	@Output() viewDevice = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	view() {
		this.viewDevice.emit(this.device);
	}

	delete() {
		this.deleteDevice.emit(this.device);
	}
}
