import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Bus} from '../model/bus';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) { }

  getBusById(id: number): Observable<Bus[]>{
    return this.http.get<Bus[]>('http://localhost:3000/bus?idStation=' + id);
  }
}
