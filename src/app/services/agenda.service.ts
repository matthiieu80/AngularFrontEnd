import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventSettingsModel[]> {
    return this.http.get<EventSettingsModel[]>('http://localhost:8080/api/events');
  }

}
