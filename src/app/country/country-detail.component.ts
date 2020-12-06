import { Component, OnInit } from '@angular/core';
import {Station} from '../model/station';
import {StationService} from '../shared/station.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CountryService} from '../shared/country.service';
import {Country} from '../model/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  selectedCountry: Country;
  private stationIndex: number;
  private countryIndex: number;
  private subscription: Subscription;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private countryService: CountryService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.countryIndex = params['idcountry'];
        this.countryService.getCountrie(this.countryIndex).subscribe(ref => this.selectedCountry = ref );
      }
    );
  }

}
