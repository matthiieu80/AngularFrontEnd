import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../services/WeatherService";
import { WeatherData } from "./weatherInterface";
import { WeatherAPIResponse } from "./weatherInterface";





@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  latitude: number | undefined;
  longitude: number | undefined;
  weather: WeatherData = { name: '', current: { temp: 0, humidity: 0, wind_speed: 0 } };
  city: string = '';
  isLoading: boolean = false;







  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.latitude = success.coords.latitude;
        this.longitude = success.coords.longitude;
        this.getWeatherData();
      })
    }
  }

  getCityCoords(): void {
    this.isLoading = true;
    // @ts-ignore
    this.weatherService.getCityCoords(this.city).subscribe((data: { lat: number, lon: number }[]) => {
      if (data.length > 0) {
        const coords = data[0];
        // Appelle l'API OpenWeatherMap pour récupérer les données météorologiques
        // @ts-ignore
        this.weatherService.getWeatherDataByCoords(coords.lat, coords.lon).subscribe((data: WeatherData) => {
          this.weather = data;
          this.city = data['name']; // Mettre à jour la valeur de la ville
          this.isLoading = false;
        })
      }
    });
  }


  getWeatherData() {
    // @ts-ignore
    this.weatherService.getWeatherDataByCoords(this.latitude!, this.longitude!).subscribe((data: WeatherData) => {
      this.weather = data;
      this.isLoading = false;
    })
  }

  onSubmit() {
    this.weatherService.getWeatherDataByCity(this.city).subscribe(data => {
      this.weather = data as WeatherAPIResponse;
    });
  }
}
