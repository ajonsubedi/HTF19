import { Component, OnInit } from '@angular/core';
import { Platform } from "@ionic/angular";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  map: GoogleMap;
  moneyBags: Observable<any>;
  constructor(private platform: Platform, public httpClient: HttpClient, public geolocation: Geolocation) { 
    this.moneyBags = this.httpClient.get('http://52.157.94.246/moneybags');
    this.moneyBags
    .subscribe(data => {
      console.log('my data: ', data);
    });
  }
  
  ionViewWillEnter() {
    this.loadMap();
  }
  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      let currentPos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: currentPos,
          zoom: 10,
          tilt: 30
        }
      };
      this.map = GoogleMaps.create('map_canvas', mapOptions);
    });
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyC9pb3oyTazCxVnWjXgc-2s0vPUneq8ZM0'
    });
    
    // start the map on your current location
    
    this.geolocation.getCurrentPosition().then((resp) => {
      let currentPos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: currentPos,
          zoom: 15,
          tilt: 30
        },
        controls:{
          myLocation: true,
          myLocationButton: true
        }
      };
      this.map = GoogleMaps.create('map_canvas', mapOptions);
    });


    //location of a crew member
    this.geolocation.getCurrentPosition().then((resp) => {
      let currentPos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      let crewMember: Marker = this.map.addMarkerSync({
        title: 'Crew 1',
        icon: 'blue',
        animation: 'DROP',
        position: currentPos
      });
      crewMember.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('crew member');
      });
    });

        //location of a moneybag
        // let crewMember: Marker = this.map.addMarkerSync({
        //   title: 'Crew 1',
        //   icon: 'blue',
        //   animation: 'DROP',
        //   position: {
        //     lat: ,
        //     lng:
        //   }
        // });
        // crewMember.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        //   alert('crew member');
        // });
}
  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

}
