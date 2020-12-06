import { Component, OnInit } from '@angular/core';
import {Station} from '../model/station';
import {StationService} from '../shared/station.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../shared/country.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {

  selectedStation: Station;
  private countryIndex: number;
  private stationIndex: number;
  private subscription: Subscription;
  constructor(
    private cs: CountryService,
    private router: Router,
    private route: ActivatedRoute,
    private stationService: StationService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.countryIndex = params['idcountry'];
        this.stationIndex = params['idstation'];
        this.stationService.SelectedStation(this.stationIndex).subscribe( next => this.selectedStation = next);
      }
    );
  }

}
