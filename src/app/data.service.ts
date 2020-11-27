import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public router: Router, public http: HttpClient) { }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        // console.log(position)
        console.log(`Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`)
        this.getDate(position.coords.latitude, position.coords.longitude)
      }, error => {
        console.log(error)
      });
    } else {
      // x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  date;
  getDate(lat, long) {
    return this.http.get<any>(`https://api.timezonedb.com/v2.1/get-time-zone?key=PX72BBC2GSRR&format=json&by=position&lat=${lat}&lng=${long}`)
    .subscribe( data => {
      console.log(data)
      this.date = data.formatted;
    }, error => {
      console.log(error)
    })
  }

  logout() {
    this.router.navigateByUrl("/login")
  }
}
