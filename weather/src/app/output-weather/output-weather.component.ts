import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherData } from '../weather-data.model';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';
import { PlatformHelper } from '@natec/mef-dev-platform-connector';

@Component({
  selector: 'app-output-weather',
  templateUrl: './output-weather.component.html',
  styleUrls: ['./output-weather.component.css']
})
export class OutputWeatherComponent implements OnChanges {
  @Input() weatherData: any;
  @Input() view: string = 'today';
  @Input() errorMessage: string = '';

  cityInput: string = '';

  todayWeather: any;
  forecastWeather: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['view'] || changes['weatherData']) {
      this.loadData(); 
    }
  }

  loadData(): void {
    if (this.view === 'today') {
      this.todayWeather = this.getTodayWeather();
    } else if (this.view === '5days') {
      this.forecastWeather = this.groupByDate(this.weatherData);
    }
  }

  getTodayWeather(): any {
    if (!this.weatherData?.list?.length) return null;
    const now = new Date().getTime();
    return this.weatherData.list.reduce((closest: any, current: any) => {
      const currentTime = new Date(current.dt_txt).getTime();
      const closestTime = new Date(closest.dt_txt).getTime();
      return Math.abs(currentTime - now) < Math.abs(closestTime - now) ? current : closest;
    });
  }

  getRealTimeTemperature(temp: number): number {
    return temp - 273.15; 
  }

  getWeatherIcon(description: string): string {
    description = description.toLowerCase();
    if (description.includes('rain')) return 'assets/rain.png';
    if (description.includes('clear')) return 'assets/sun.png';
    if (description.includes('cloud')) return 'assets/cloud.png';
    return 'assets/cloud.png'; 
  }

  groupByDate(weatherData: any): any[] {
    if (!weatherData?.list) return [];
    const groups: { [key: string]: any[] } = {};
    for (const item of weatherData.list) {
      const date = item.dt_txt.split(' ')[0];
      if (!groups[date]) groups[date] = [];
      groups[date].push(item);
    }
    return Object.keys(groups).map(date => ({ date, forecasts: groups[date] }));
  }


  onCitySearch() {
    if (this.cityInput) {
      this.weatherData = { 
        city: { 
          name: this.cityInput, 
          country: '' 
        }, 
        list: [], 
        wind: { speed: 0 }, 
        main: { temp: 0, humidity: 0 }, 
        weather: [] 
      };
      this.loadData();
    }
  }
}