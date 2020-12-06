import { Component, OnInit } from '@angular/core';
import {Station} from '../model/station';
import {Subscription} from 'rxjs';
import {CountryService} from '../shared/country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StationService} from '../shared/station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  public stationFound: Station [] ;
  private countryIndex: number;
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
        this.countryIndex = +params["idcountry"];
        this.stationService.getStation(this.countryIndex).subscribe(next => this.stationFound = next);
        console.log(this.stationFound);
      }
    );
  }

}
