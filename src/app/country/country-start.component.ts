import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../model/country';

@Component({
  selector: 'app-country-start',
  templateUrl: './country-start.component.html',
  styleUrls: ['./country-start.component.css']
})
export class CountryStartComponent implements OnInit {

  @Input() country: Country;
  @Input() countryId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
