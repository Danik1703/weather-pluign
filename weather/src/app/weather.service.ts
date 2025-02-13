import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from './weather-data.model'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '1b2e397bc6da86c01f1e9edb5b8b6c03'; // Your API key
  private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  getCurrentWeather(cityName: string): Observable<WeatherData> {
    const url = `${this.weatherApiUrl}?q=${cityName}&appid=${this.apiKey}`;
    return this.http.get<WeatherData>(url);
  }

  getWeatherForecast(cityName: string): Observable<WeatherData> {
    const url = `${this.forecastApiUrl}?q=${cityName}&appid=${this.apiKey}`;
    return this.http.get<WeatherData>(url);
  }

  getWeatherByCoordinates(lat: number, lon: number): Observable<WeatherData> {
    const url = `${this.weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get<WeatherData>(url);
  }

  getWeatherForecastByCoordinates(lat: number, lon: number): Observable<WeatherData> {
    const url = `${this.forecastApiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get<WeatherData>(url);
  }
  getWeatherHourly(cityName: string) {
    const url = `API_URL/forecast?city=${cityName}&hourly=true`; // Замените на реальный API-URL и параметр для получения почасовых данных
    return this.http.get<WeatherData>(url);
  }
}
