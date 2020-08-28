import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
  }

  title = 'weather-app';
  news = null;
  public isSubmitted = false;
  isLoader = false;
  cityName = '';

  ngOnInit() {
    this.weatherService.cityName.subscribe(city => {
      this.cityName = city;
      this.GetNews(this.cityName);
    });
  }

  GetNews(cityName) {
    this.isLoader = true;
    this.weatherService.GetNews(cityName).subscribe((resp: any) => {
      this.cityName = resp?.location?.name;
      if (resp?.success === false) {
        this.isLoader = false;
        this.news = null;
        alert('city name not found.');
      }
      else {
        this.news = resp;
      }
      this.isLoader = false;
    });
  }
}
