import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // URL de l'API OpenWeatherMap
  apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
  // Clé API
  apiKey = '32e94775e57d2154a6f0f2cf8ae6df2b';

  constructor(private http: HttpClient) { }

  // Récupère les données météorologiques pour une paire de coordonnées
  getWeatherDataByCoords(latitude: number, longitude: number) {
    let params = new HttpParams()
      .set('lat', latitude.toString())
      .set('lon', longitude.toString())
      .set('units', 'metric')
      .set('appid', this.apiKey)

    return this.http.get(this.apiUrl, { params });
  }

  // Récupère les données météorologiques pour une ville donnée
  getWeatherDataByCity(city: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }

}
