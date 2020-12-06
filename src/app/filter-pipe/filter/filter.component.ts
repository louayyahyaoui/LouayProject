import { Component, OnInit } from '@angular/core';
import {Bus} from '../../model/bus';
import {BusService} from '../../shared/bus.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  saerchName: string = '';
  listBus: Bus[] = [];
  constructor(private bs: BusService) { }

  ngOnInit(): void {
    this.bs.getAllBus().subscribe((next) => this.listBus = next , (error) => console.log(error) );

  }

}
