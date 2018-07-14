import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AngularFireDatabase} from 'angularfire2/database';

declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public geolocation: Geolocation,
    public afd : AngularFireDatabase) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
      this.addCircle();

      //envoyer les coordonnées au serveur
      


      


    }, (err) => {
      console.log(err);
    });
  }

  addMarker(){
    
     let marker = new google.maps.Marker({
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: this.map.getCenter()
     });
  }

  addCircle(){
    let circle = new google.maps.Circle({
       map: this.map,
       strokeColor: '#FF0000',
       strokeOpacity: 0.5,
       strokeWeight: 2,
       fillColor: '#FF0000',
       fillOpacity: 0.35,
       center: this.map.getCenter(),
       radius: 350
    })
  }
   
}