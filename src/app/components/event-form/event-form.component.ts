import {Component, OnInit} from '@angular/core';
import { Event } from '../../models/event';
import { EventsService } from '../../services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit{
  event: Event = {
    id: 0,
    title: '',
    time: '',
    type: ''
  };

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.eventsService.addEvent(this.event).subscribe(() => {
      this.eventsService.getEvents().subscribe(events => {
        this.eventsService.events = events;
      });
    });
    this.event = {
      id: 0,
      title: '',
      time: '',
      type: ''
    };
  }

}
