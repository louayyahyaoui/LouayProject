import { Component, OnInit } from '@angular/core';
import {ChauffeurService} from '../../shared/chauffeur.service';
import {ToastrService} from 'ngx-toastr';
import {Chauffeur} from '../../model/chauffeur';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {

  constructor(
    public chauffeurService: ChauffeurService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }


  createOrUpdateChauffeur(currentChauffeur: Chauffeur) {
    if (currentChauffeur.id === null) {
      this.createChauffeur(currentChauffeur);
    } else {
      this.updateChauffeur(currentChauffeur);
    }
  }

  createChauffeur(emp: Chauffeur) {
    this.chauffeurService.createChauffeur(emp).subscribe(
      (result: Chauffeur) => {
        this.chauffeurService.getAllChauffeurs();
        this.toastrService.success('Chauffeur created successfully !', 'Chauffeur CRUD');
        this.clearChauffeur();
      });
  }

  updateChauffeur(emp: Chauffeur) {
    this.chauffeurService.updateChauffeur(emp).subscribe(
      (result: Chauffeur) => {
        this.chauffeurService.getAllChauffeurs();
        this.toastrService.info('Chauffeur updated successfully !', 'Chauffeur CRUD');
        this.clearChauffeur();
      });
  }

  clearChauffeur() {
    this.chauffeurService.currentChauffeur = {
      id: null,
      firstName: '',
      lastName: '',
      station: '',
      contact: null
    };
  }

}
