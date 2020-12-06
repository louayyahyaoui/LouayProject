import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Country} from '../model/country';
import {HttpClient} from '@angular/common/http';
import {Station} from '../model/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>('http://localhost:3000/station');
  }
  getStation(id: number): Observable<Station[]> {
    return this.http.get<Station[]>('http://localhost:3000/station?countryId=' + id);
  }

  SelectedStation(id: number): Observable<Station> {
    return this.http.get<Station>('http://localhost:3000/station/' + id);
  }
}
