import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public cityName = new BehaviorSubject<string>('Pune');
  private accessKey = '5e305ad939620f52762e583ae816634f';
  private getNewsUrl = 'http://api.weatherstack.com/current?access_key=' + this.accessKey + '&query=';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  GetNews(cityName = 'Pune') {
    return this.http.get(this.getNewsUrl + cityName);
  }
}
