import { Component } from '@angular/core';
import { Platform, NavController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  isAuthenticated: boolean = false;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    authService: AuthService,
    toastService: ToastService,
    protected app: App) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      // check for auth
      // subscribe to auth events
      authService.authEE.subscribe((authState) => {
        this.isAuthenticated = authState;
      });

      authService.isAuthenticated().subscribe((isAuth) => {
        console.info('User Auth State:', isAuth ? 'Logged In' : 'Logged Off');
        if (isAuth) {
          toastService.toggleToast('Login Successful!');
          let lastPage = this.navCtrl.last().instance;
          if (lastPage instanceof LoginPage) {
            this.rootPage = HomePage;
          }
        }
      });
    });
  }

  // https://github.com/driftyco/ionic/issues/9581
  get navCtrl(): NavController {
    return this.app.getRootNav();
  }
}

