webpackJsonp([1,5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.dataLimit = 30;
    }
    DataService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' + this.auth.getToken());
        headers.append('Accept-Language', 'en_US');
        headers.append('Content-Type', 'application/json');
    };
    DataService.prototype.create = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Globals */].BASE_API_URL + 'api/v1/data', data, {
            headers: headers
        });
    };
    DataService.prototype.get = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Globals */].BASE_API_URL + 'api/v1/data/' + id + '/' + this.dataLimit, {
            headers: headers
        });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketService = (function () {
    function SocketService(auth) {
        this.auth = auth;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].BASE_API_URL, {
            'query': 'token=' + auth.getToken()
        });
    }
    SocketService.prototype.getData = function (macAddress) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"](function (observer) {
            _this.socket.on('data:save:' + macAddress, function (data) {
                observer.next(data);
            });
            return function (error) {
                console.error(error);
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SocketService);

var _a;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 178;


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(200);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_devices_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDeviceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDeviceComponent = (function () {
    function AddDeviceComponent(devicesService, router, notificationsService) {
        this.devicesService = devicesService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.device = {
            name: '',
            macAddress: ''
        };
    }
    AddDeviceComponent.prototype.ngOnInit = function () {
    };
    AddDeviceComponent.prototype.create = function () {
        var _this = this;
        this.devicesService.create(this.device).subscribe(function (response) {
            if (response.json().__v === 0) {
                _this.notificationsService.success('Device creation Successful');
                // device has bee successfully created. 
                // redirect user
                _this.router.navigateByUrl('/home');
            }
        });
    };
    return AddDeviceComponent;
}());
AddDeviceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-device',
        template: __webpack_require__(286),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DevicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DevicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */]) === "function" && _c || Object])
], AddDeviceComponent);

var _a, _b, _c;
//# sourceMappingURL=add-device.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, ngZone, renderer, loader) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.loader = loader;
        // options for notification bar
        this.notfiOptions = {
            position: ["bottom", "right"],
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            lastOnBottom: true,
            clickToClose: true,
            animate: 'animate'
        };
        router.events.subscribe(function (event) {
            _this._navigationInterceptor(event);
        });
        this.loader.status.subscribe(function (val) {
            _this.showLoader = val;
        });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype._navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
            this.loader.display(true);
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
            this.loader.display(false);
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationCancel */]) {
            this.loader.display(false);
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* NavigationError */]) {
            this.loader.display(false);
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('spinnerElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AppComponent.prototype, "spinnerElement", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(287),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__device_device_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_bar_nav_bar_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_2_local_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_devices_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_device_add_device_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guard_auth_guard__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__device_template_device_template_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_http_interceptor_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_loader_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_socket_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_data_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_notifications__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_ui_switch_src__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_charts_ng2_charts__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_charts_ng2_charts__);
/* unused harmony export httpInterceptorService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-device', component: __WEBPACK_IMPORTED_MODULE_15__add_device_add_device_component__["a" /* AddDeviceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'view-device/:id', component: __WEBPACK_IMPORTED_MODULE_9__device_device_component__["a" /* DeviceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '/login' },
    { path: '', pathMatch: 'full', redirectTo: '/login' }
];
function httpInterceptorService(backend, options, loader) {
    return new __WEBPACK_IMPORTED_MODULE_18__services_http_interceptor_service__["a" /* HttpInterceptorService */](backend, options, loader);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__device_device_component__["a" /* DeviceComponent */],
            __WEBPACK_IMPORTED_MODULE_15__add_device_add_device_component__["a" /* AddDeviceComponent */],
            __WEBPACK_IMPORTED_MODULE_17__device_template_device_template_component__["a" /* DeviceTemplateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'web-app',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_22_angular2_notifications__["a" /* SimpleNotificationsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_23_ngx_ui_switch_src__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_24_ng2_charts_ng2_charts__["ChartsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_14__services_devices_service__["a" /* DevicesService */],
            __WEBPACK_IMPORTED_MODULE_21__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_20__services_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_16__guard_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_19__services_loader_service__["a" /* LoaderService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
                useFactory: httpInterceptorService,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_19__services_loader_service__["a" /* LoaderService */]]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceTemplateComponent = (function () {
    function DeviceTemplateComponent() {
        this.deleteDevice = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.viewDevice = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DeviceTemplateComponent.prototype.ngOnInit = function () {
    };
    DeviceTemplateComponent.prototype.view = function () {
        this.viewDevice.emit(this.device);
    };
    DeviceTemplateComponent.prototype.delete = function () {
        this.deleteDevice.emit(this.device);
    };
    return DeviceTemplateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DeviceTemplateComponent.prototype, "device", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DeviceTemplateComponent.prototype, "deleteDevice", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DeviceTemplateComponent.prototype, "viewDevice", void 0);
DeviceTemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-template',
        template: __webpack_require__(288),
        styles: [__webpack_require__(272)]
    }),
    __metadata("design:paramtypes", [])
], DeviceTemplateComponent);

//# sourceMappingURL=device-template.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_devices_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeviceComponent = (function () {
    function DeviceComponent(deviceService, socketService, dataService, route, notificationsService) {
        this.deviceService = deviceService;
        this.socketService = socketService;
        this.dataService = dataService;
        this.route = route;
        this.notificationsService = notificationsService;
        this.toggleState = false;
        // line chart config
        this.lineChartOptions = {
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
                            steps: 10,
                            stepValue: 5,
                            max: 70
                        }
                    }]
            },
            title: {
                display: true,
                text: 'Temperature & Humidity vs. Time'
            }
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartData = [];
        this.lineChartLabels = [];
    }
    DeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subDevice = this.route.params.subscribe(function (params) {
            _this.deviceService.getOne(params['id']).subscribe(function (response) {
                _this.device = response.json();
                _this.getData();
                _this.socketInit();
            });
        });
    };
    DeviceComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.device.macAddress).subscribe(function (response) {
            _this.data = response.json();
            _this.genChart();
            _this.lastRecord = _this.data[0]; // descending order data
            if (_this.lastRecord) {
                _this.toggleState = _this.lastRecord.data.l;
            }
        });
    };
    DeviceComponent.prototype.toggleChange = function (state) {
        var _this = this;
        var data = {
            macAddress: this.device.macAddress,
            data: {
                t: this.lastRecord.data.t,
                h: this.lastRecord.data.h,
                l: state ? 1 : 0
            },
            topic: 'led'
        };
        this.dataService.create(data).subscribe(function (resp) {
            if (resp.json()._id) {
                _this.notificationsService.success('Device Notified!');
            }
        }, function (err) {
            console.log(err);
            _this.notificationsService.error('Device Notification Failed. Check console for the error!');
        });
    };
    DeviceComponent.prototype.socketInit = function () {
        var _this = this;
        this.subData = this.socketService.getData(this.device.macAddress).subscribe(function (data) {
            if (_this.data.length <= 0)
                return;
            _this.data.splice(_this.data.length - 1, 1); // remove the last record
            _this.data.push(data); // add the new one
            _this.lastRecord = data;
            _this.genChart();
        });
    };
    DeviceComponent.prototype.ngOnDestroy = function () {
        this.subDevice.unsubscribe();
        this.subData ? this.subData.unsubscribe() : '';
    };
    DeviceComponent.prototype.genChart = function () {
        var data = this.data;
        var _dtArr = [];
        var _lblArr = [];
        var tmpArr = [];
        var humArr = [];
        for (var i = 0; i < data.length; i++) {
            var _d = data[i];
            tmpArr.push(_d.data.t);
            humArr.push(_d.data.h);
            _lblArr.push(this.formatDate(_d.createdAt));
        }
        // reverse data to show the latest on the right side
        tmpArr.reverse();
        humArr.reverse();
        _lblArr.reverse();
        _dtArr = [
            {
                data: tmpArr,
                label: 'Temperature'
            },
            {
                data: humArr,
                label: 'Humidity %'
            },
        ];
        this.lineChartData = _dtArr;
        this.lineChartLabels = _lblArr;
    };
    DeviceComponent.prototype.formatDate = function (originalTime) {
        var d = new Date(originalTime);
        var datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
            d.getHours() + ":" + d.getMinutes();
        return datestring;
    };
    return DeviceComponent;
}());
DeviceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device',
        template: __webpack_require__(289),
        styles: [__webpack_require__(273)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DevicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DevicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */]) === "function" && _f || Object])
], DeviceComponent);

var _a, _b, _c, _e, _f;
//# sourceMappingURL=device.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthGuard = (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AuthGuard);

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_devices_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(authService, router, devicesService) {
        this.authService = authService;
        this.router = router;
        this.devicesService = devicesService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // check for auth
        if (!this.authService.isAuth) {
            // go to login page
            this.router.navigateByUrl('/');
        }
        else {
            // fetch all devices
            this.getAll();
        }
    };
    HomeComponent.prototype.getAll = function () {
        var _this = this;
        this.devicesService.getAll().subscribe(function (response) {
            _this.devices = response.json();
        });
    };
    HomeComponent.prototype.addDevice = function () {
        this.router.navigateByUrl('/add-device');
    };
    HomeComponent.prototype.viewDevice = function (device) {
        this.router.navigate(['/view-device/', device._id]);
    };
    HomeComponent.prototype.deleteDevice = function (device) {
        var _this = this;
        if (confirm('Are you certain?')) {
            this.devicesService.delete(device._id).subscribe(function (response) {
                if (response.status === 204) {
                    _this.devices = undefined;
                    _this.getAll();
                }
                else {
                    alert('Delete failed, please try again!');
                }
            });
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(290),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_devices_service__["a" /* DevicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_devices_service__["a" /* DevicesService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, notificationsService) {
        this.authService = authService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.user).subscribe(function (response) {
            var resp = response.json();
            _this.notificationsService.success('Login Successful');
            if (_this.authService.initSession(resp.token, resp.user)) {
                _this.router.navigateByUrl('/home');
            }
        }, function (err) {
            _this.notificationsService.error('Login Failed!');
            console.error(err);
            _this.authService.destroySession();
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(291),
        styles: [__webpack_require__(275)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = (function () {
    function NavBarComponent(authService, router, notificationsService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.isAuthenticated = false;
        // subscribe to auth events
        this.authService.authEE.subscribe(function (authState) {
            _this.isAuthenticated = authState;
        });
        // // check auth state
        this.authService.isAuthenticated().subscribe(function (isAuth) {
            console.info('User Auth State:', isAuth ? 'Logged In' : 'Logged Off');
            if (isAuth) {
                _this.notificationsService.success('Login Successful!');
                var u = location.href;
                if (u.indexOf('login') > 0 || u.indexOf('register') > 0) {
                    _this.router.navigateByUrl('/home');
                }
            }
        });
    }
    NavBarComponent.prototype.logout = function () {
        console.log('called');
        if (this.authService.logout()) {
            this.router.navigateByUrl('login');
        }
        else {
            console.error('Logout Failed');
        }
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(292),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */]) === "function" && _c || Object])
], NavBarComponent);

var _a, _b, _c;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, router, notificationsService) {
        this.authService = authService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.user = {
            name: '',
            email: '',
            password: ''
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.user).subscribe(function (response) {
            var resp = response.json();
            _this.notificationsService.success('Registartion Successful');
            if (_this.authService.initSession(resp.token, resp.user)) {
                _this.router.navigateByUrl('/home');
            }
        }, function (err) {
            _this.notificationsService.error('Registartion Failed!');
            console.error(err);
            _this.authService.destroySession();
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(293),
        styles: [__webpack_require__(277)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptorService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// https://blog.slinto.sk/angular-2-http-interceptors-7e2d74b7f14e
var HttpInterceptorService = (function (_super) {
    __extends(HttpInterceptorService, _super);
    function HttpInterceptorService(backend, defaultOptions, loader) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.backend = backend;
        _this.defaultOptions = defaultOptions;
        _this.loader = loader;
        return _this;
    }
    HttpInterceptorService.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    HttpInterceptorService.prototype.get = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.get.call(this, url, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    HttpInterceptorService.prototype.getLocal = function (url, options) {
        return _super.prototype.get.call(this, url, options);
    };
    HttpInterceptorService.prototype.post = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.post.call(this, url, body, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    HttpInterceptorService.prototype.put = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.put.call(this, url, body, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    HttpInterceptorService.prototype.delete = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.delete.call(this, url, options)
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    HttpInterceptorService.prototype.requestOptions = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        }
        return options;
    };
    HttpInterceptorService.prototype.requestInterceptor = function () {
        this.loader.display(true);
    };
    HttpInterceptorService.prototype.responseInterceptor = function () {
        this.loader.display(false);
    };
    HttpInterceptorService.prototype.onCatch = function (error, caught) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    HttpInterceptorService.prototype.onSubscribeSuccess = function (res) {
        // console.info('Subscibe Success');
    };
    HttpInterceptorService.prototype.onSubscribeError = function (error) {
        // console.error('Subscibe Error');
    };
    HttpInterceptorService.prototype.onFinally = function () {
        this.responseInterceptor();
    };
    return HttpInterceptorService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
HttpInterceptorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], HttpInterceptorService);

var _a, _b, _c;
//# sourceMappingURL=http-interceptor.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, lsService, notificationsService) {
        this.http = http;
        this.lsService = lsService;
        this.notificationsService = notificationsService;
        this.authEE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isAuth = false;
    }
    // Register User
    AuthService.prototype.register = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].BASE_API_URL + 'api/v1/users', user);
    };
    // Login User
    AuthService.prototype.login = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].BASE_API_URL + 'auth/local', user);
    };
    // Logout User
    AuthService.prototype.logout = function () {
        return this.destroySession();
    };
    // Initailize a new session on the client side
    AuthService.prototype.initSession = function (token, user) {
        try {
            this.lsService.set(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].API_AUTH_TOKEN, token);
            this.lsService.set(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].AUTH_USER, user);
            this.setAuthState(true);
            return true;
        }
        catch (ex) {
            console.error(ex);
            return false;
        }
    };
    // Clean the session from client side
    AuthService.prototype.destroySession = function () {
        try {
            this.lsService.remove(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].API_AUTH_TOKEN);
            this.lsService.remove(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].AUTH_USER);
            this.setAuthState(false);
            return true; // try succeeded
        }
        catch (ex) {
            console.error(ex);
            return false;
        }
    };
    // Get token from storage
    AuthService.prototype.getToken = function () {
        return this.lsService.get(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].API_AUTH_TOKEN);
    };
    // Get user object from storage
    AuthService.prototype.getUser = function () {
        return this.lsService.get(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].AUTH_USER);
    };
    // Get the auth status
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"](function (observer) {
            // No Token No Request
            if (!_this.getToken()) {
                _this.setAuthState(false);
                observer.next(false);
                observer.complete();
                return;
            }
            // If isAuth is defined,  
            // we are good to go
            if (_this.isAuth) {
                _this.setAuthState(true);
                observer.next(true);
                observer.complete();
                return;
            }
            // Refresh the session
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
            _this.createAuthorizationHeader(headers);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].BASE_API_URL + 'api/v1/users/me', {
                headers: headers
            }).subscribe(function (response) {
                // repopulate the user object
                _this.lsService.set(__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Globals */].AUTH_USER, response.json());
                _this.setAuthState(true);
                observer.next(!!(response.json()._id));
                observer.complete();
            }, function (error) {
                _this.notificationsService.error('Auto Login Failed!');
                _this.setAuthState(false);
                _this.destroySession(); // remove expired token
                observer.next(false);
                observer.complete();
            });
        });
    };
    // Private Helpers 
    // set Auth State
    AuthService.prototype.setAuthState = function (bool) {
        this.isAuth = bool;
        this.authEE.emit(bool);
    };
    // Create requried headers
    AuthService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' + this.getToken());
        headers.append('Accept-Language', 'en_US');
        headers.append('Content-Type', 'application/json');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/* Absolute Center Spinner */\n\n.loading {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n\n\n/* Transparent Overlay */\n\n.loading:before {\n    content: '';\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n\n/* :not(:required) hides these rules from IE9 and below */\n\n.loading:not(:required) {\n    /* hide \"loading...\" text */\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n}\n\n.loading:not(:required):after {\n    content: '';\n    display: block;\n    font-size: 10px;\n    width: 1em;\n    height: 1em;\n    margin-top: -0.5em;\n    -webkit-animation: spinner 1500ms infinite linear;\n    animation: spinner 1500ms infinite linear;\n    border-radius: 0.5em;\n    box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n}\n\n\n/* Animation */\n\n@-webkit-keyframes spinner {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes spinner {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*https://bootsnipp.com/snippets/kEvrW*/\n.wrapper {\n    display: block;\n    background-color: #fff;\n    border: 6px solid #D9D9D9;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.well {\n    min-height: 20px;\n    padding: 0px;\n    margin-bottom: 20px;\n    background-color: #D9D9D9;\n    border: 1px solid #D9D9D9;\n    padding-left: 15px;\n    border: 0px;\n}\n\n.btn-wrapper{\n    overflow: auto;\n}\n\nhr{\n    border:1px solid #D9D9D9;\n    margin: 0;\n}\n\n.icon-style {\n    margin-right: 15px;\n    font-size: 18px;\n    margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <h3 class=\"text-center\">Add New Device</h3>\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"modal-content\">\n            <div class=\"panel-body\">\n                <form role=\"form\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Name\" name=\"name\" type=\"text\" autofocus=\"\" [(ngModel)]=\"device.name\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Mac Address\" name=\"macAddress\" type=\"text\" autofocus=\"\" [(ngModel)]=\"device.macAddress\" required>\n                        </div>\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"!device.name || !device.macAddress\" (click)=\"create()\">Create</button>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet>\n\t<div *ngIf=\"showLoader\" class=\"loading\"></div >\n\t<simple-notifications [options]=\"notfiOptions\"></simple-notifications>\n</router-outlet>"

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n    <div class=\"wrapper\">\n        <div class='col-lg-12 well'>\n            <h4>{{device.name}}</h4>\n        </div>\n        <div class='col-lg-12'>\n            <p>{{device.macAddress}}</p>\n            <p class=\"text-muted\">Last Update: {{device.updatedAt | date: 'medium'}}</p>\n        </div>\n        <hr>\n        <div class=\"btn-wrapper\">\n            <button type=\"button\" class=\"btn btn-primary col-md-6\" (click)=\"view()\">View</button>\n            <button type=\"button\" class=\"btn btn-danger col-md-6\" (click)=\"delete()\">Delete</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <div *ngIf=\"!device\">\n        <h3 class=\"text-center\">Loading!</h3>\n    </div>\n    <div class=\"row\" *ngIf=\"lastRecord\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">\n                        {{device.name}}\n                    </h3>\n                    <span class=\"pull-right btn-click\">\n                        <i class=\"fa fa-chevron-circle-up\"></i>\n                    </span>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <tr>\n                            <td>Toggle LED</td>\n                            <td>\n                                <ui-switch [(ngModel)]=\"toggleState\" (change)=\"toggleChange($event)\"></ui-switch>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"lastRecord\">\n                            <td>Temperature</td>\n                            <td>{{lastRecord.data.t}}</td>\n                        </tr>\n                        <tr *ngIf=\"lastRecord\">\n                            <td>Humidity</td>\n                            <td>{{lastRecord.data.h}}</td>\n                        </tr>\n                        <tr *ngIf=\"lastRecord\">\n                            <td>Received At</td>\n                            <td>{{lastRecord.createdAt | date: 'medium'}}</td>\n                        </tr>\n                    </table>\n                    <div class=\"col-md-10 col-md-offset-1\" *ngIf=\"lineChartData.length > 0\">\n                        <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <button class=\"btn btn-info pull-right\" (click)=\"addDevice()\"> <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle\"></span>&nbsp;&nbsp;&nbsp;Add Device</button>\n    <div class=\"clearfix\"></div>\n    <br>\n</div>\n<div *ngIf=\"!devices\">\n    <h3 class=\"text-center\">Loading!</h3>\n</div>\n<div *ngIf=\"devices && devices.length === 0\">\n    <h3 class=\"text-center\">No Devices</h3>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor=\"let dev of devices\">\n            <app-device-template [device]=\"dev\" (deleteDevice)=\"deleteDevice($event)\" (viewDevice)=\"viewDevice($event)\"></app-device-template>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <h3 class=\"text-center\">Login to Web App</h3>\n    <div class=\"modal-dialog\" style=\"margin-bottom:0\">\n        <div class=\"modal-content\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title text-center\">Sign In</h3>\n            </div>\n            <div class=\"panel-body\">\n                <form role=\"form\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"E-mail\" name=\"email\" type=\"email\" autofocus=\"\" [(ngModel)]=\"user.email\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" autofocus=\"\" [(ngModel)]=\"user.password\" required>\n                        </div>\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"!user.email || !user.password\" (click)=\"login()\">Login</button>\n                        <hr>\n                        <a [routerLink]=\"['/register']\" class=\"btn btn-info center-block\">Register with the Web App</a>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Web App</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"isAuthenticated\"><a href=\"javascrpt:\" (click)=\"logout()\">Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <h3 class=\"text-center\">Register with Web App</h3>\n    <div class=\"modal-dialog\" style=\"margin-bottom:0\">\n        <div class=\"modal-content\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title text-center\">Register</h3>\n            </div>\n            <div class=\"panel-body\">\n                <form role=\"form\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Name\" name=\"name\" type=\"text\" autofocus=\"\" [(ngModel)]=\"user.name\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"E-mail\" name=\"email\" type=\"email\" autofocus=\"\" [(ngModel)]=\"user.email\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" autofocus=\"\" [(ngModel)]=\"user.password\" required>\n                        </div>\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"!user.email || !user.password\" (click)=\"register()\">Register</button>\n                        <hr>\n                        <a [routerLink]=\"['/']\" class=\"btn btn-info center-block\">Login to the Web App</a>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
// http://stackoverflow.com/a/39360585/1015046
// http://stackoverflow.com/a/39360585/1015046
var Globals = Object.freeze({
    BASE_API_URL: 'http://localhost:9000/',
    API_AUTH_TOKEN: 'AUTH_TOKEN',
    AUTH_USER: 'AUTH_USER'
});
//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DevicesService = (function () {
    function DevicesService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    DevicesService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' + this.auth.getToken());
        headers.append('Accept-Language', 'en_US');
        headers.append('Content-Type', 'application/json');
    };
    DevicesService.prototype.create = function (device) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Globals */].BASE_API_URL + 'api/v1/devices', device, {
            headers: headers
        });
    };
    DevicesService.prototype.getAll = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Globals */].BASE_API_URL + 'api/v1/devices', {
            headers: headers
        });
    };
    DevicesService.prototype.getOne = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Globals */].BASE_API_URL + 'api/v1/devices/' + id, {
            headers: headers
        });
    };
    DevicesService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Globals */].BASE_API_URL + 'api/v1/devices/' + id, {
            headers: headers
        });
    };
    return DevicesService;
}());
DevicesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], DevicesService);

var _a, _b;
//# sourceMappingURL=devices.service.js.map

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(179);


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = (function () {
    function LoaderService() {
        // https://hassantariqblog.wordpress.com/2017/03/22/angular2-using-custom-loader-spinner-as-service-in-angular-2-application/
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    return LoaderService;
}());
LoaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LoaderService);

//# sourceMappingURL=loader.service.js.map

/***/ })

},[568]);
//# sourceMappingURL=main.bundle.js.map