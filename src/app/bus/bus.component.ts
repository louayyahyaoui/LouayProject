import { Component, OnInit } from '@angular/core';
import {StationService} from '../shared/station.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../shared/country.service';
import {Subscription} from 'rxjs';
import {BusService} from '../shared/bus.service';
import {Bus} from '../model/bus';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

   busFound: Bus[] = [];
  private stationIndex: number;
  private subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bs: BusService,
  ) { }

  ngOnInit(): void {

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.stationIndex = params["idstation"];
        this.bs.getBusById(this.stationIndex).subscribe((next) => this.busFound = next , (error) => console.log(error) );
        console.log(this.busFound);
      });
  }

}
