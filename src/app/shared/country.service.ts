import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../model/country';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  country: Country[];
  foundCountry: Country;
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:3000/country');
}
  getCountrie(id: number): Observable<Country> {
    return this.http.get<Country>('http://localhost:3000/country/' + id);
  }
}
