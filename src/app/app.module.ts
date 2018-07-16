import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';
import {AngularFireModule} from 'angularfire2';
import {FcmProvider} from '../providers/fcm/fcm';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var config = {
  apiKey: "AIzaSyCY7ZprLN9pg0ii7xLN3aY8m6cq21azlOI",
  authDomain: "appl-a-l-aide.firebaseapp.com",
  databaseURL: "https://appl-a-l-aide.firebaseio.com",
  projectId: "appl-a-l-aide",
  storageBucket: "appl-a-l-aide.appspot.com",
  messagingSenderId: "399837569881"
};
 
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FcmProvider,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}