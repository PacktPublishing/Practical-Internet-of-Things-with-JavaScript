import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

	constructor(private toastCtrl: ToastController) { }

	toggleToast(text: string, duration?: number) {
		let toast = this.toastCtrl.create({
			position: 'bottom',
			message: text,
			duration: duration || 3000,
			dismissOnPageChange: true
		});
		toast.present();
	}

	showToast(text: string) {
		let toast = this.toastCtrl.create({
			position: 'bottom',
			message: text,
			showCloseButton: true,
			dismissOnPageChange: true
		});
		toast.present();
	}
}