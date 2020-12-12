import { Injectable } from '@angular/core';
import {Chauffeur} from '../model/chauffeur';
import {HttpClient} from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  allChauffeur: Chauffeur[];
  Url: string = 'http://localhost:3000/Chauffeur';
  currentChauffeur: Chauffeur = {
    firstName: '',
    lastName: '',
    contact: null,
    id: null,
    station: ''
  }
  constructor(
    private http: HttpClient,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  getAllChauffeurs() {
    this.ngxSpinnerService.show();
    return this.http.get<Chauffeur[]>(this.Url).subscribe(
      (data: Chauffeur[]) => {
        this.allChauffeur = data;
        console.table(this.allChauffeur);
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }

  deleteChauffeur(id: number): Observable<Chauffeur> {
    return this.http.delete<Chauffeur>(this.Url + '/' + id);
  }

  createChauffeur(chauffeur: Chauffeur): Observable<Chauffeur> {
    return this.http.post<Chauffeur>(this.Url, chauffeur);
  }

  updateChauffeur(chauffeur: Chauffeur): Observable<Chauffeur> {
    return this.http.put<Chauffeur>(this.Url + '/' + chauffeur.id, chauffeur);
  }
}
