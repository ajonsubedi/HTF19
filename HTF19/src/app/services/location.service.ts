import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(public geolocation: Geolocation) { }
  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      let currentPos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
    });
  }
}
