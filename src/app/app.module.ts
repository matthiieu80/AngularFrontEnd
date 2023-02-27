import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddUserComponent} from './components/add-users/add-product.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//import {UserListComponent} from './components/user-list/user-list.component';
import {
  ScheduleModule,
  RecurrenceEditorModule,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  MonthAgendaService
} from '@syncfusion/ej2-angular-schedule';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {MyProfilComponent} from './components/my-profil/my-profil.component';

import {AdminComponent} from './components/admin/admin.component';
import {WeatherComponent} from "./components/weather/weather.component";
import {CalendarComponent} from './components/calendar/calendar.component';
import {FilterPipe} from './filter.pipe';
import {EventFormComponent} from './components/event-form/event-form.component';
import {authInterceptorProviders} from "./services/http.interceptor";
import {ProfilComponent} from './components/profil/profil.component';
import {HomeComponent} from './components/home/home.component';
import {BoardUserComponent} from './components/role/board-user/board-user.component';
import {BoardAdminComponent} from './components/role/board-admin/board-admin.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from "./components/login/login.component";
import {CommonModule} from "@angular/common";
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUserComponent,
   // UserListComponent,
    ScheduleComponent,
    MyProfilComponent,
    AdminComponent,
    WeatherComponent,
    CalendarComponent,
    FilterPipe,
    EventFormComponent,
    ProfilComponent,
    HomeComponent,
    BoardUserComponent,
    BoardAdminComponent,
    RegisterComponent,
    LoginComponent,
    PageAccueilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ScheduleModule,
    RecurrenceEditorModule,
    CommonModule
  ],
  providers: [authInterceptorProviders, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
