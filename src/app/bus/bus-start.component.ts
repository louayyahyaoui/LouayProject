import {Component, Input, OnInit} from '@angular/core';
import {Bus} from '../model/bus';

@Component({
  selector: 'app-bus-start',
  templateUrl: './bus-start.component.html',
  styleUrls: ['./bus-start.component.css']
})
export class BusStartComponent implements OnInit {

  @Input() bus: Bus;
  @Input() busId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
