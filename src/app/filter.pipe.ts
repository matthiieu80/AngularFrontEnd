import { Pipe, PipeTransform } from '@angular/core';
import { Event } from './models/event';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(events: Event[], filterType: string, startTime: string, endTime: string): Event[] {
    if (!events) return [];
    if (!filterType && !startTime && !endTime) return events;
    let filteredEvents = events;

    if (filterType) {
      filteredEvents = filteredEvents.filter(event => event.type === filterType);
    }

    if (startTime) {
      filteredEvents = filteredEvents.filter(event => event.time >= startTime);
    }

    if (endTime) {
      filteredEvents = filteredEvents.filter(event => event.time <= endTime);
    }

    return filteredEvents;
  }
}
