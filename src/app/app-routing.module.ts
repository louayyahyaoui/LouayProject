import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryComponent} from './country/country.component';
import {COUNTRY_ROUTES} from './country/country-routes';
import {FilterComponent} from './filter-pipe/filter/filter.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ChauffeurComponent} from './chauffeurs/chauffeur/chauffeur.component';
import {ChauffeurStartComponent} from './chauffeurs/chauffeur-start/chauffeur-start.component';
import {ChauffeurListComponent} from './chauffeurs/chauffeur-list/chauffeur-list.component';
import {WeatherStartComponent} from './weathers/weather-start/weather-start.component';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/country', pathMatch: 'full'},
  {path: 'country', component: CountryComponent, children: COUNTRY_ROUTES},
  {path: 'filter', component: FilterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chauffeur', component: ChauffeurStartComponent},
  {path: 'weather', component: WeatherStartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

