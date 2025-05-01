import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data.model';

@Component({
  selector: 'app-choose-city',
  templateUrl: './choose-city.component.html',
  styleUrls: ['./choose-city.component.css']
})
export class ChooseCityComponent {
  cityName: string = '';
  weatherData: WeatherData | null = null;
  errorMessage: string = '';
  view: string = 'today';
  loadingMessage: string = '';
  loading: boolean = false;
  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    if (this.cityName.trim() === '') {
      this.errorMessage = 'Введіть назву міста';
      return;
    }
    this.loadingMessage = 'Оновлення погоди...';
    this.loading = true;
    this.weatherData = null;  
    this.loadWeatherData();  
  }

  loadWeatherData() {
    this.loading = true;

    if (this.view === 'today') {
      this.getCurrentWeather();  
    } else {
      this.getWeatherForecast(); 
    }
  }

  onViewChange() {
    this.loadWeatherData();
  }

  getCurrentWeather() {
    this.weatherService.getCurrentWeather(this.cityName)
      .subscribe(
        (data: any) => {
          this.weatherData = {
            city: {
              name: this.cityName,
              country: data.sys?.country || ''
            },
            list: [{
              dt_txt: new Date().toISOString(),
              main: {
                temp: data.main?.temp || 0,
                humidity: data.main?.humidity || 0
              },
              weather: data.weather || [],
              wind: {
                speed: data.wind?.speed || 0
              }
            }]
          } as any;
          this.loading = false;
          this.loadingMessage = '';  
        },
        (error: any) => {
          this.errorMessage = 'Не вдалося знайти інформацію про погоду для зазначеного міста';
          this.loading = false;
          this.loadingMessage = '';  
          console.error(error);
        }
      );
  }

  getWeatherForecast() {
    this.weatherService.getWeatherForecast(this.cityName)
      .subscribe(
        (data: WeatherData) => {
          this.weatherData = data;
          this.loading = false;
          this.loadingMessage = '';
        },
        (error: any) => {
          this.errorMessage = 'Не вдалося знайти інформацію про погоду для зазначеного міста';
          this.loading = false;
          this.loadingMessage = '';  
          console.error(error);
        }
      );
  }

  getWeatherInMyCity() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        if (this.view === 'today') {
          this.weatherService.getWeatherByCoordinates(latitude, longitude)
            .subscribe(
              (data: WeatherData) => {
                this.weatherData = {
                  city: {
                    name: data.city?.name || '',  
                    country: data.city?.country || ''
                  },
                  list: [{
                    dt_txt: new Date().toISOString(),
                    main: {
                      temp: data.main?.temp || 0,
                      humidity: data.main?.humidity || 0
                    },
                    weather: data.weather || [],
                    wind: {
                      speed: data.wind?.speed || 0
                    }
                  }]
                } as any;
                this.errorMessage = '';
              },
              (error: any) => {
                this.errorMessage = 'Не вдалося отримати інформацію про погоду для вашого місцезнаходження';
                console.error(error);
              }
            );
        } else if (this.view === '5days') {
          this.weatherService.getWeatherForecastByCoordinates(latitude, longitude)
            .subscribe(
              (data: WeatherData) => {
                this.weatherData = data;
                this.errorMessage = '';
              },
              (error: any) => {
                this.errorMessage = 'Не вдалося отримати інформацію про погоду для вашого місцезнаходження';
                console.error(error);
              }
            );
        }
      }, (error) => {
        this.errorMessage = 'Не вдалося отримати ваше місцезнаходження';
        console.error(error);
      });
    } else {
      this.errorMessage = 'Геолокація не підтримується цим браузером.';
    }
  }  
}  