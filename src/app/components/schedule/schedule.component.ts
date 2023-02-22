import { Component, OnInit } from '@angular/core';
import { Schedule } from '@syncfusion/ej2-schedule';
import { AgendaService } from '../../services/agenda.service';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-schedule',
  template : '<ejs-schedule></ejs-schedule>',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  events!: EventSettingsModel[];
  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.agendaService.getEvents().subscribe((events: EventSettingsModel[]) => {
      this.events = events;
      let scheduleObj = new Schedule({
        height: '500px',
        width: '100%',
        eventSettings: {
          dataSource: this.events
        }
      });
      scheduleObj.appendTo('#schedule');
    });
  }
}
