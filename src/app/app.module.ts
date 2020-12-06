import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { StationComponent } from './station/station.component';
import { BusComponent } from './bus/bus.component';
import { HeaderComponent } from './header.component';
import { StationStartComponent } from './station/station-start.component';
import { StationDetailComponent } from './station/station-detail.component';
import { StationListComponent } from './station/station-list.component';
import { BusStartComponent } from './bus/bus-start.component';
import {StationService} from './shared/station.service';
import {CountryService} from './shared/country.service';
import {BusService} from './shared/bus.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CountryDetailComponent} from './country/country-detail.component';
import {CountryListComponent} from './country/country-list.component';
import {CountryStartComponent} from './country/country-start.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterComponent } from './filter-pipe/filter/filter.component';
import {FilterPipe} from './filter-pipe/filter/filter-bus';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    StationComponent,
    BusComponent,
    HeaderComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryStartComponent,
    StationStartComponent,
    StationDetailComponent,
    StationListComponent,
    BusStartComponent,
    FilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountryService, StationService, BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
