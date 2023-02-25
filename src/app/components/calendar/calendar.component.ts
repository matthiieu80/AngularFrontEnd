import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { EventsService } from '../../services/event.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CookieService]

})
export class CalendarComponent implements OnInit {
  filterType: string = '';
  startTime: string = '';
  endTime: string = '';
  public events: Event[] = [];

  eventToUpdate: Event = { id: 0, title: '', time: '', type: '' };

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
    });
  }




  getEventsAsString() {
    let eventsString = '';
    this.events.forEach(event => {
      eventsString += 'Titre : `${event.title}`\nHeure : ${event.time}\nType : ${event.type}\n\n';
    });
    return eventsString;
  }


  onEditEvent(event: Event) {
    console.log("Evénement sélectionné : ", event);
    this.eventToUpdate = event;
    console.log("Valeur de eventToUpdate : ", this.eventToUpdate);
  }

 /* onSubmitForm() {
    // Mettre à jour l'événement sélectionné avec les nouvelles valeurs
    console.log("Valeur de eventToUpdate avant mise à jour : ", this.eventToUpdate);
    const index = this.events.findIndex(event => event.id === this.eventToUpdate.id);
    if (index !== -1) {
      this.events[index] = { ...this.eventToUpdate };
    }
    console.log("Valeur de eventToUpdate après mise à jour : ", this.eventToUpdate);
    console.log("Evénements après mise à jour : ", this.events);
  }*/


  onSubmitForm() {
    // Mettre à jour l'événement sélectionné avec les nouvelles valeurs
    const index = this.events.findIndex(event => event.id === this.eventToUpdate.id);
    if (index !== -1) {
      this.events[index] = { ...this.eventToUpdate };
    }

    // Enregistrer les modifications dans le service
    this.eventsService.updateEvent(this.eventToUpdate).subscribe(() => {
      console.log("Les modifications ont été enregistrées avec succès !");
    });
  }





  deleteEvent(id: number): void {
    this.eventsService.deleteEvent(id).subscribe(() => {
      this.events = this.events.filter(event => event.id !== id);
    });
  }





  shareEventByEmail() {
    const emailSubject = `Liste des événements`;
    let emailBody = `Bonjour,\n\nVoici la liste complète des événements :\n\n`;

    for (let i = 0; i < this.events.length; i++) {
      emailBody += `Titre : ${this.events[i].title}\nHeure : ${this.events[i].time}\nType : ${this.events[i].type}\n\n`;
    }

    emailBody += `Cordialement,`;

    window.location.href = `mailto:?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`;
  }


}
