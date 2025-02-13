import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseCityComponent } from './choose-city/choose-city.component';
import { OutputWeatherComponent } from './output-weather/output-weather.component';

const routes: Routes = [
  { path: 'choose-city', component: ChooseCityComponent },
  { path: 'output-weather', component: OutputWeatherComponent },
  { path: '', redirectTo: '/choose-city', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
