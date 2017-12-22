import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {
	// https://hassantariqblog.wordpress.com/2017/03/22/angular2-using-custom-loader-spinner-as-service-in-angular-2-application/

	public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor() { }

	public display(value: boolean) {
		this.status.next(value);
	}
}
