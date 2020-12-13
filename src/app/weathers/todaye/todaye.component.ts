import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-todaye',
  templateUrl: './todaye.component.html',
  styleUrls: ['./todaye.component.css']
})
export class TodayeComponent implements OnInit {
  lat;
  lon;
  weather;

  constructor(private ws: WeatherService) {
  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {

        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.ws.getWeatherDateByCoords(this.lat, this.lon).subscribe(data => {
          this.weather = data;
        });

      })
    }

  }

  getCity(city){
    this.ws.getWeatherDataByCityName(city).subscribe((data: any) => {
      this.weather = data ;
      this.lat = data.coord.lat;
      this.lon = data.coord.lon;
    });
  }

}
