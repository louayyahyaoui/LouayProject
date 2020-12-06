import {Component, Input, OnInit} from '@angular/core';
import {Station} from '../model/station';

@Component({
  selector: 'app-station-start',
  templateUrl: './station-start.component.html',
  styleUrls: ['./station-start.component.css']
})
export class StationStartComponent implements OnInit {

  @Input() station: Station;
  @Input() stationId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
