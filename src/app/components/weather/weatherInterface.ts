export interface WeatherData {
  name: string;
  current: {
    temp: any;
    humidity: any;
    wind_speed: any;
  };
}

export interface WeatherAPIResponse {
  name: string;
  current: {
    temp: number;
    humidity: number;
    wind_speed: number;
  }
}

