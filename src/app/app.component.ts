import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';
//import { HomePage } from '../pages/home/home';

const config = {
  apiKey: 'AIzaSyA2EgwI7dxTHaHIRz5BKrAjglAHAmEV1A0',
  authDomain: 'forum-947ac.firebaseapp.com',
  databaseURL: 'https://forum-947ac.firebaseio.com',
  projectId: 'forum-947ac',
  storageBucket: 'forum-947ac.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
