import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apikey = '7231f1997df0cbcbca91b67b69191ab9';
  constructor(private  http: HttpClient) { }

  getWeatherDateByCoords(lat, lon)
  {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apikey)
    return this.http.get(this.url, {params});
  }

  getWeatherDataByCityName(city: string){
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'imperial')
      .set('appid', this.apikey)
    return this.http.get(this.url, { params});
  }
}
