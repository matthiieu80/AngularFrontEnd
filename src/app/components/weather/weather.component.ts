import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../services/WeatherService";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  latitude: number | undefined;
  longitude: number | undefined;
  weather: any;
  city: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getLocation();
  }

  // Récupère les coordonnées de l'utilisateur à l'aide de l'API de géolocalisation
  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.latitude = success.coords.latitude;
        this.longitude = success.coords.longitude;

        // Appelle l'API OpenWeatherMap pour récupérer les données météorologiques
        this.weatherService.getWeatherDataByCoords(this.latitude, this.longitude).subscribe(data => {
          this.weather = data;
        })
      })
    }
  }

  // Récupère les données météorologiques pour une ville donnée
  onSubmit() {
    this.weatherService.getWeatherDataByCity(this.city).subscribe((data: any) => {
      this.weather = data;
    });
  }
}
