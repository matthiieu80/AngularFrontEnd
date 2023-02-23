import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsUrl = 'http://localhost:8080/api/events';
  public events: Event[] = [];
  public eventsSubject: Subject<Event[]> = new Subject<Event[]>();

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    this.http.get<any[]>(this.eventsUrl)
      .pipe(
        map(events => events.map(event => ({
          id: event.id,
          title: event.title,
          time: event.time,
          type: event.type
        })))
      )
      .subscribe(events => {
        this.events = events;
        this.eventsSubject.next(events);
      });
    return this.eventsSubject.asObservable();
  }

  addEvent(addEvent: Event): Observable<any> {
    return this.http.post<void>('http://localhost:8080/api/events', addEvent)
      .pipe(
        map(() => {
          this.getEvents().subscribe();
        })
      );
  }





  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.eventsUrl}/${id}`)
      .pipe(
        map(() => {
          this.getEvents().subscribe();
        })
      );
  }
}
