import { Component } from '@angular/core';
import {
	Router,
	// import as RouterEvent to avoid confusion with the DOM Event
	Event as RouterEvent,
	NavigationStart,
	NavigationEnd,
	NavigationCancel,
	NavigationError
} from '@angular/router'
import { NgZone, Renderer, ElementRef, ViewChild } from '@angular/core'
import { LoaderService } from './services/loader.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	// http://stackoverflow.com/a/38620817/1015046
	showLoader: boolean;
	// Instead of holding a boolean value for whether the spinner
	// should show or not, we store a reference to the spinner element.
	@ViewChild('spinnerElement') spinnerElement: ElementRef;

	// options for notification bar
	public notfiOptions = {
		position: ["bottom", "right"],
		timeOut: 3000,
		showProgressBar: true,
		pauseOnHover: false,
		lastOnBottom: true,
		clickToClose: true,
		animate: 'animate'
	};

	constructor(private router: Router,
		private ngZone: NgZone,
		private renderer: Renderer,
		private loader: LoaderService) {
		router.events.subscribe((event: RouterEvent) => {
			this._navigationInterceptor(event);
		});

		this.loader.status.subscribe((val: boolean) => {
			this.showLoader = val;
		});
	}

	// Shows and hides the loading spinner during RouterEvent changes
	private _navigationInterceptor(event: RouterEvent): void {

		if (event instanceof NavigationStart) {
			this.loader.display(true);
		}

		if (event instanceof NavigationEnd) {
			this.loader.display(false);
		}

		if (event instanceof NavigationCancel) {
			this.loader.display(false);
		}

		if (event instanceof NavigationError) {
			this.loader.display(false);
		}
	}
}
