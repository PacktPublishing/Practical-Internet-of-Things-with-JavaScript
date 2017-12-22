import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddDevicePage } from '../pages/add-device/add-device';
import { ViewDevicePage } from '../pages/view-device/view-device';

import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { DevicesService } from '../services/device.service';
import { DataService } from '../services/data.service';
import { SocketService } from '../services/socket.service';

import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddDevicePage,
    ViewDevicePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LocalStorageModule.withConfig({
      prefix: 'mobile-app',
      storageType: 'localStorage'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AddDevicePage,
    ViewDevicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    ToastService,
    DevicesService,
    DataService,
    SocketService
  ]
})
export class AppModule { }
