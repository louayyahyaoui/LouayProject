import { Component, OnInit } from '@angular/core';
import {Station} from '../model/station';
import {Subscription} from 'rxjs';
import {StationService} from '../shared/station.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../shared/country.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {

  }

}
