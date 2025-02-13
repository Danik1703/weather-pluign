import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChooseCityComponent } from './choose-city/choose-city.component';
import { OutputWeatherComponent } from './output-weather/output-weather.component';
import { BannerComponent } from './banner/banner.component';

import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChooseCityComponent,
    OutputWeatherComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],

  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
