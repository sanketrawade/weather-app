import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private accessKey = '5e305ad939620f52762e583ae816634f';
  private getNewsUrl = 'http://api.weatherstack.com/current?access_key=' + this.accessKey + '&query=';
  constructor(private http: HttpClient) { }

  GetNews(cityName = 'Pune') {
    return this.http.get(this.getNewsUrl + cityName);
  }
}
