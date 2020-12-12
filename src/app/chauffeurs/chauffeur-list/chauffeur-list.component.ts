import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ChauffeurService} from '../../shared/chauffeur.service';
import {Chauffeur} from '../../model/chauffeur';

@Component({
  selector: 'app-chauffeur-list',
  templateUrl: './chauffeur-list.component.html',
  styleUrls: ['./chauffeur-list.component.css']
})
export class ChauffeurListComponent implements OnInit {

  constructor(
    public chauffeurService: ChauffeurService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllChauffeur();
  }

  getAllChauffeur() {
    this.chauffeurService.getAllChauffeurs();
  }

  editEmployee(employee: Chauffeur) {
    this.chauffeurService.currentChauffeur = Object.assign({}, employee);
    this.toastrService.warning('Chauffeur edited successfully !', 'Chauffeur CRUD');
  }

  deleteChauffeur(id: number) {
    this.chauffeurService.deleteChauffeur(id).subscribe(
      (data) => {
        this.getAllChauffeur();
        this.toastrService.error('Chauffeur deleted successfully !', 'Chauffeur CRUD');
      });
  }

}
