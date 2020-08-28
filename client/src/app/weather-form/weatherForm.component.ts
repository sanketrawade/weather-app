import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { NgForm } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-weatherForm',
  templateUrl: './weatherForm.component.html',
  styleUrls: ['./weatherForm.component.css']
})
export class WeatherFormComponent implements OnInit {
  constructor(private weatherService: WeatherService) {
  }
  // @ViewChild('Nulles') ElementRef: HTMLInputElement;
  isSubmitted = false;
  isLoader = false;
  cityName = '';

  ngOnInit() {
    this.weatherService.cityName.subscribe(city => {
      this.cityName = city;
    });
  }

  // tslint:disable-next-line: typedef
  Search(wetherForm: NgForm) {
    this.isSubmitted = true;
    if (wetherForm.invalid) {
      return;
    }
    const city = wetherForm.controls.city.value;
    this.weatherService.cityName.next(city);
  }

}
