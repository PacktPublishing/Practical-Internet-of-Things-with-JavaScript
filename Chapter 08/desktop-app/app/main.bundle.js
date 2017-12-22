webpackJsonp([1,5],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(27);
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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(39);
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

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 295;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(317);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_devices_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
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
        template: __webpack_require__(452),
        styles: [__webpack_require__(434)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DevicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DevicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _c || Object])
], AddDeviceComponent);

var _a, _b, _c;
//# sourceMappingURL=add-device.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__(74);
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
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loader.status.subscribe(function (val) {
                _this.showLoader = val;
            });
        });
    };
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
        template: __webpack_require__(453),
        styles: [__webpack_require__(435)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__device_device_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_bar_nav_bar_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_2_local_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_devices_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_device_add_device_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guard_auth_guard__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__device_template_device_template_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_http_interceptor_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_loader_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_socket_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_data_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_notifications__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_ui_switch_src__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_charts_ng2_charts__ = __webpack_require__(448);
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
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'web-app',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_22_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
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

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
        template: __webpack_require__(454),
        styles: [__webpack_require__(436)]
    }),
    __metadata("design:paramtypes", [])
], DeviceTemplateComponent);

//# sourceMappingURL=device-template.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_devices_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(39);
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
    // line chart config
    function DeviceComponent(deviceService, socketService, dataService, route, notificationsService) {
        this.deviceService = deviceService;
        this.socketService = socketService;
        this.dataService = dataService;
        this.route = route;
        this.notificationsService = notificationsService;
        this.toggleState = false;
    }
    DeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subDevice = this.route.params.subscribe(function (params) {
            _this.deviceService.getOne(params['id']).subscribe(function (response) {
                _this.device = response.json();
                _this.getData();
            });
        });
    };
    DeviceComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.device.macAddress).subscribe(function (response) {
            _this.data = response.json();
            var d = _this.data[0];
            d.data.fname = __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Globals */].BASE_API_URL + 'stream/' + d.data.fname;
            _this.lastRecord = _this.data[0]; // descending order data
            _this.socketInit();
        });
    };
    DeviceComponent.prototype.socketInit = function () {
        var _this = this;
        this.subData = this.socketService.getData(this.device.macAddress).subscribe(function (data) {
            if (_this.data.length <= 0)
                return;
            _this.data.splice(_this.data.length - 1, 1); // remove the last record
            data.data.fname = __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Globals */].BASE_API_URL + 'stream/' + data.data.fname + '?t=' + (Math.random() * 100000);
            _this.data.push(data); // add the new one
            _this.lastRecord = data;
        });
    };
    DeviceComponent.prototype.ngOnDestroy = function () {
        this.subDevice.unsubscribe();
        this.subData ? this.subData.unsubscribe() : '';
    };
    return DeviceComponent;
}());
DeviceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device',
        template: __webpack_require__(455),
        styles: [__webpack_require__(437)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DevicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DevicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === "function" && _e || Object])
], DeviceComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=device.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_devices_service__ = __webpack_require__(55);
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
        template: __webpack_require__(456),
        styles: [__webpack_require__(438)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_devices_service__["a" /* DevicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_devices_service__["a" /* DevicesService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
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
        template: __webpack_require__(457),
        styles: [__webpack_require__(439)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
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
        template: __webpack_require__(458),
        styles: [__webpack_require__(440)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _c || Object])
], NavBarComponent);

var _a, _b, _c;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
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
        template: __webpack_require__(459),
        styles: [__webpack_require__(441)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_service__ = __webpack_require__(74);
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

/***/ 317:
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

/***/ 39:
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

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "/* Absolute Center Spinner */\n\n.loading {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n\n\n/* Transparent Overlay */\n\n.loading:before {\n    content: '';\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n\n/* :not(:required) hides these rules from IE9 and below */\n\n.loading:not(:required) {\n    /* hide \"loading...\" text */\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n}\n\n.loading:not(:required):after {\n    content: '';\n    display: block;\n    font-size: 10px;\n    width: 1em;\n    height: 1em;\n    margin-top: -0.5em;\n    -webkit-animation: spinner 1500ms infinite linear;\n    animation: spinner 1500ms infinite linear;\n    border-radius: 0.5em;\n    box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n}\n\n\n/* Animation */\n\n@-webkit-keyframes spinner {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes spinner {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "/*https://bootsnipp.com/snippets/kEvrW*/\n.wrapper {\n    display: block;\n    background-color: #fff;\n    border: 6px solid #D9D9D9;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.well {\n    min-height: 20px;\n    padding: 0px;\n    margin-bottom: 20px;\n    background-color: #D9D9D9;\n    border: 1px solid #D9D9D9;\n    padding-left: 15px;\n    border: 0px;\n}\n\n.btn-wrapper{\n    overflow: auto;\n}\n\nhr{\n    border:1px solid #D9D9D9;\n    margin: 0;\n}\n\n.icon-style {\n    margin-right: 15px;\n    font-size: 18px;\n    margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 135,
	"./af.js": 135,
	"./ar": 142,
	"./ar-dz": 136,
	"./ar-dz.js": 136,
	"./ar-kw": 137,
	"./ar-kw.js": 137,
	"./ar-ly": 138,
	"./ar-ly.js": 138,
	"./ar-ma": 139,
	"./ar-ma.js": 139,
	"./ar-sa": 140,
	"./ar-sa.js": 140,
	"./ar-tn": 141,
	"./ar-tn.js": 141,
	"./ar.js": 142,
	"./az": 143,
	"./az.js": 143,
	"./be": 144,
	"./be.js": 144,
	"./bg": 145,
	"./bg.js": 145,
	"./bn": 146,
	"./bn.js": 146,
	"./bo": 147,
	"./bo.js": 147,
	"./br": 148,
	"./br.js": 148,
	"./bs": 149,
	"./bs.js": 149,
	"./ca": 150,
	"./ca.js": 150,
	"./cs": 151,
	"./cs.js": 151,
	"./cv": 152,
	"./cv.js": 152,
	"./cy": 153,
	"./cy.js": 153,
	"./da": 154,
	"./da.js": 154,
	"./de": 157,
	"./de-at": 155,
	"./de-at.js": 155,
	"./de-ch": 156,
	"./de-ch.js": 156,
	"./de.js": 157,
	"./dv": 158,
	"./dv.js": 158,
	"./el": 159,
	"./el.js": 159,
	"./en-au": 160,
	"./en-au.js": 160,
	"./en-ca": 161,
	"./en-ca.js": 161,
	"./en-gb": 162,
	"./en-gb.js": 162,
	"./en-ie": 163,
	"./en-ie.js": 163,
	"./en-nz": 164,
	"./en-nz.js": 164,
	"./eo": 165,
	"./eo.js": 165,
	"./es": 167,
	"./es-do": 166,
	"./es-do.js": 166,
	"./es.js": 167,
	"./et": 168,
	"./et.js": 168,
	"./eu": 169,
	"./eu.js": 169,
	"./fa": 170,
	"./fa.js": 170,
	"./fi": 171,
	"./fi.js": 171,
	"./fo": 172,
	"./fo.js": 172,
	"./fr": 175,
	"./fr-ca": 173,
	"./fr-ca.js": 173,
	"./fr-ch": 174,
	"./fr-ch.js": 174,
	"./fr.js": 175,
	"./fy": 176,
	"./fy.js": 176,
	"./gd": 177,
	"./gd.js": 177,
	"./gl": 178,
	"./gl.js": 178,
	"./gom-latn": 179,
	"./gom-latn.js": 179,
	"./he": 180,
	"./he.js": 180,
	"./hi": 181,
	"./hi.js": 181,
	"./hr": 182,
	"./hr.js": 182,
	"./hu": 183,
	"./hu.js": 183,
	"./hy-am": 184,
	"./hy-am.js": 184,
	"./id": 185,
	"./id.js": 185,
	"./is": 186,
	"./is.js": 186,
	"./it": 187,
	"./it.js": 187,
	"./ja": 188,
	"./ja.js": 188,
	"./jv": 189,
	"./jv.js": 189,
	"./ka": 190,
	"./ka.js": 190,
	"./kk": 191,
	"./kk.js": 191,
	"./km": 192,
	"./km.js": 192,
	"./kn": 193,
	"./kn.js": 193,
	"./ko": 194,
	"./ko.js": 194,
	"./ky": 195,
	"./ky.js": 195,
	"./lb": 196,
	"./lb.js": 196,
	"./lo": 197,
	"./lo.js": 197,
	"./lt": 198,
	"./lt.js": 198,
	"./lv": 199,
	"./lv.js": 199,
	"./me": 200,
	"./me.js": 200,
	"./mi": 201,
	"./mi.js": 201,
	"./mk": 202,
	"./mk.js": 202,
	"./ml": 203,
	"./ml.js": 203,
	"./mr": 204,
	"./mr.js": 204,
	"./ms": 206,
	"./ms-my": 205,
	"./ms-my.js": 205,
	"./ms.js": 206,
	"./my": 207,
	"./my.js": 207,
	"./nb": 208,
	"./nb.js": 208,
	"./ne": 209,
	"./ne.js": 209,
	"./nl": 211,
	"./nl-be": 210,
	"./nl-be.js": 210,
	"./nl.js": 211,
	"./nn": 212,
	"./nn.js": 212,
	"./pa-in": 213,
	"./pa-in.js": 213,
	"./pl": 214,
	"./pl.js": 214,
	"./pt": 216,
	"./pt-br": 215,
	"./pt-br.js": 215,
	"./pt.js": 216,
	"./ro": 217,
	"./ro.js": 217,
	"./ru": 218,
	"./ru.js": 218,
	"./sd": 219,
	"./sd.js": 219,
	"./se": 220,
	"./se.js": 220,
	"./si": 221,
	"./si.js": 221,
	"./sk": 222,
	"./sk.js": 222,
	"./sl": 223,
	"./sl.js": 223,
	"./sq": 224,
	"./sq.js": 224,
	"./sr": 226,
	"./sr-cyrl": 225,
	"./sr-cyrl.js": 225,
	"./sr.js": 226,
	"./ss": 227,
	"./ss.js": 227,
	"./sv": 228,
	"./sv.js": 228,
	"./sw": 229,
	"./sw.js": 229,
	"./ta": 230,
	"./ta.js": 230,
	"./te": 231,
	"./te.js": 231,
	"./tet": 232,
	"./tet.js": 232,
	"./th": 233,
	"./th.js": 233,
	"./tl-ph": 234,
	"./tl-ph.js": 234,
	"./tlh": 235,
	"./tlh.js": 235,
	"./tr": 236,
	"./tr.js": 236,
	"./tzl": 237,
	"./tzl.js": 237,
	"./tzm": 239,
	"./tzm-latn": 238,
	"./tzm-latn.js": 238,
	"./tzm.js": 239,
	"./uk": 240,
	"./uk.js": 240,
	"./ur": 241,
	"./ur.js": 241,
	"./uz": 243,
	"./uz-latn": 242,
	"./uz-latn.js": 242,
	"./uz.js": 243,
	"./vi": 244,
	"./vi.js": 244,
	"./x-pseudo": 245,
	"./x-pseudo.js": 245,
	"./yo": 246,
	"./yo.js": 246,
	"./zh-cn": 247,
	"./zh-cn.js": 247,
	"./zh-hk": 248,
	"./zh-hk.js": 248,
	"./zh-tw": 249,
	"./zh-tw.js": 249
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 444;


/***/ }),

/***/ 452:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <h3 class=\"text-center\">Add New Device</h3>\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"modal-content\">\n            <div class=\"panel-body\">\n                <form role=\"form\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Name\" name=\"name\" type=\"text\" autofocus=\"\" [(ngModel)]=\"device.name\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Mac Address\" name=\"macAddress\" type=\"text\" autofocus=\"\" [(ngModel)]=\"device.macAddress\" required>\n                        </div>\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"!device.name || !device.macAddress\" (click)=\"create()\">Create</button>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet>\n\t<div *ngIf=\"showLoader\" class=\"loading\"></div >\n\t<simple-notifications [options]=\"notfiOptions\"></simple-notifications>\n</router-outlet>"

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n    <div class=\"wrapper\">\n        <div class='col-lg-12 well'>\n            <h4>{{device.name}}</h4>\n        </div>\n        <div class='col-lg-12'>\n            <p>{{device.macAddress}}</p>\n            <p class=\"text-muted\">Last Update: {{device.updatedAt | date: 'medium'}}</p>\n        </div>\n        <hr>\n        <div class=\"btn-wrapper\">\n            <button type=\"button\" class=\"btn btn-primary col-md-6\" (click)=\"view()\">View</button>\n            <button type=\"button\" class=\"btn btn-danger col-md-6\" (click)=\"delete()\">Delete</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <div *ngIf=\"!device\">\n        <h3 class=\"text-center\">Loading!</h3>\n    </div>\n    <div class=\"row\" *ngIf=\"!lastRecord\">\n        <h3 class=\"text-center\">No Data!</h3>\n    </div>\n    <div class=\"row\" *ngIf=\"lastRecord\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">\n                        {{device.name}}\n                    </h3>\n                    <span class=\"pull-right btn-click\">\n                        <i class=\"fa fa-chevron-circle-up\"></i>\n                    </span>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"table-responsive\" *ngIf=\"lastRecord\">\n                    <table class=\"table table-striped\">\n                        <tr>\n                            <td colspan=\"2\" class=\"text-center\"><img  [src]=\"lastRecord.data.fname\"></td>\n                        </tr>\n                        <tr class=\"text-center\" >\n                            <td>Received At</td>\n                            <td>{{lastRecord.createdAt | date: 'medium'}}</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <button class=\"btn btn-info pull-right\" (click)=\"addDevice()\"> <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle\"></span>&nbsp;&nbsp;&nbsp;Add Device</button>\n    <div class=\"clearfix\"></div>\n    <br>\n</div>\n<div *ngIf=\"!devices\">\n    <h3 class=\"text-center\">Loading!</h3>\n</div>\n<div *ngIf=\"devices && devices.length === 0\">\n    <h3 class=\"text-center\">No Devices</h3>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor=\"let dev of devices\">\n            <app-device-template [device]=\"dev\" (deleteDevice)=\"deleteDevice($event)\" (viewDevice)=\"viewDevice($event)\"></app-device-template>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <h3 class=\"text-center\">Login to Web App</h3>\n    <div class=\"modal-dialog\" style=\"margin-bottom:0\">\n        <div class=\"modal-content\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title text-center\">Sign In</h3>\n            </div>\n            <div class=\"panel-body\">\n                <form role=\"form\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"E-mail\" name=\"email\" type=\"email\" autofocus=\"\" [(ngModel)]=\"user.email\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" autofocus=\"\" [(ngModel)]=\"user.password\" required>\n                        </div>\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"!user.email || !user.password\" (click)=\"login()\">Login</button>\n                        <hr>\n                        <a [routerLink]=\"['/register']\" class=\"btn btn-info center-block\">Register with the Web App</a>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Web App</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"isAuthenticated\"><a href=\"javascrpt:\" (click)=\"logout()\">Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <h3 class=\"text-center\">Register with Web App</h3>\n    <div class=\"modal-dialog\" style=\"margin-bottom:0\">\n        <div class=\"modal-content\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title text-center\">Register</h3>\n            </div>\n            <div class=\"panel-body\">\n                <form role=\"form\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Name\" name=\"name\" type=\"text\" autofocus=\"\" [(ngModel)]=\"user.name\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"E-mail\" name=\"email\" type=\"email\" autofocus=\"\" [(ngModel)]=\"user.email\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" autofocus=\"\" [(ngModel)]=\"user.password\" required>\n                        </div>\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"!user.email || !user.password\" (click)=\"register()\">Register</button>\n                        <hr>\n                        <a [routerLink]=\"['/']\" class=\"btn btn-info center-block\">Login to the Web App</a>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(27);
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

/***/ 733:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(296);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(64);
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

},[734]);
//# sourceMappingURL=main.bundle.js.map