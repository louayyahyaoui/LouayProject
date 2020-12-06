import { Component, OnInit } from '@angular/core';
import {Country} from '../model/country';
import {CountryService} from '../shared/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[] = [];
  constructor(private cs: CountryService) { }

  ngOnInit(): void {
    this.cs.getCountries().subscribe(next => this.countries = next);
  }

}
