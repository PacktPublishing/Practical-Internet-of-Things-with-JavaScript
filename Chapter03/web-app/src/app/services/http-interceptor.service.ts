import { Injectable } from '@angular/core';
import {
	Http,
	// Request,
	ConnectionBackend,
	RequestOptions,
	RequestOptionsArgs,
	Response,
	Headers,
	Request
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { LoaderService } from './loader.service';

// https://blog.slinto.sk/angular-2-http-interceptors-7e2d74b7f14e
@Injectable()
export class HttpInterceptorService extends Http {

	constructor(private backend: ConnectionBackend,
		private defaultOptions: RequestOptions,
		private loader: LoaderService) {
		super(backend, defaultOptions);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		return super.request(url, options);
	}

	get(url: string, options?: RequestOptionsArgs): Observable<any> {
		this.requestInterceptor();
		return super.get(url, this.requestOptions(options))
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSubscribeSuccess(res);
			}, (error: any) => {
				this.onSubscribeError(error);
			})
			.finally(() => {
				this.onFinally();
			});
	}

	getLocal(url: string, options?: RequestOptionsArgs): Observable<any> {
		return super.get(url, options);
	}

	post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
		this.requestInterceptor();
		return super.post(url, body, this.requestOptions(options))
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSubscribeSuccess(res);
			}, (error: any) => {
				this.onSubscribeError(error);
			})
			.finally(() => {
				this.onFinally();
			});
	}

	put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
		this.requestInterceptor();
		return super.put(url, body, this.requestOptions(options))
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSubscribeSuccess(res);
			}, (error: any) => {
				this.onSubscribeError(error);
			})
			.finally(() => {
				this.onFinally();
			});
	}

	delete(url: string, options?: RequestOptionsArgs): Observable<any> {
		this.requestInterceptor();
		return super.delete(url, options)
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSubscribeSuccess(res);
			}, (error: any) => {
				this.onSubscribeError(error);
			})
			.finally(() => {
				this.onFinally();
			});
	}

	private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
		if (options == null) {
			options = new RequestOptions();
		}
		if (options.headers == null) {
			options.headers = new Headers();
		}
		return options;
	}

	private requestInterceptor(): void {
		this.loader.display(true);
	}

	private responseInterceptor(): void {
		this.loader.display(false);
	}

	private onCatch(error: any, caught: Observable<any>): Observable<any> {
		return Observable.throw(error);
	}

	private onSubscribeSuccess(res: Response): void {
		// console.info('Subscibe Success');
	}

	private onSubscribeError(error: any): void {
		// console.error('Subscibe Error');
	}

	private onFinally(): void {
		this.responseInterceptor();
	}

}

