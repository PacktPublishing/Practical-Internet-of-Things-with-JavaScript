import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DeviceComponent } from './device/device.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { LocalStorageModule } from 'angular-2-local-storage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './services/auth.service';
import { DevicesService } from './services/devices.service';
import { AddDeviceComponent } from './add-device/add-device.component';

import { AuthGuard } from './guard/auth.guard';
import { DeviceTemplateComponent } from './device-template/device-template.component';

import { HttpInterceptorService } from './services/http-interceptor.service';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { LoaderService } from './services/loader.service';
import { SocketService } from './services/socket.service';
import { DataService } from './services/data.service';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { UiSwitchModule } from 'ngx-ui-switch/src';
import { ChartsModule } from 'ng2-charts/ng2-charts';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'add-device', component: AddDeviceComponent, canActivate: [AuthGuard] },
  { path: 'view-device/:id', component: DeviceComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

export function httpInterceptorService(backend: XHRBackend, options: RequestOptions, loader: LoaderService) {
  return new HttpInterceptorService(backend, options, loader);
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DeviceComponent,
    AddDeviceComponent,
    DeviceTemplateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'web-app',
      storageType: 'localStorage'
    }),
    SimpleNotificationsModule.forRoot(),
    UiSwitchModule,
    ChartsModule
  ],
  providers: [
    AuthService,
    DevicesService,
    DataService,
    SocketService,
    AuthGuard,
    LoaderService,
    {
      provide: Http,
      useFactory: httpInterceptorService,
      deps: [XHRBackend, RequestOptions, LoaderService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
