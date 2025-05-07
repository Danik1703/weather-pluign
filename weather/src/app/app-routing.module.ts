import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseCityComponent } from './choose-city/choose-city.component';
import { OutputWeatherComponent } from './output-weather/output-weather.component';
import { PlatformHelper } from  '@natec/mef-dev-platform-connector';

const routes: Routes = PlatformHelper.updatePluginsRoutes([
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'choose-city',
        pathMatch: 'full',
      },
      {
        path: 'choose-city',
        component: ChooseCityComponent
      },
      {
        path: 'output-weather',
        component: OutputWeatherComponent
      }
    ]
  }
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
