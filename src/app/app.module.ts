import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddUserComponent} from './components/add-users/add-product.component';

import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SuppProductComponent } from './components/supp-product/supp-product.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ScheduleModule, RecurrenceEditorModule, DayService , WeekService , WorkWeekService , MonthService , MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MyProfilComponent } from './components/my-profil/my-profil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AdminComponent } from './components/admin/admin.component';
import {WeatherComponent} from "./components/weather/weather.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUserComponent,
    ProductDetailsComponent,
    SuppProductComponent,
    UserListComponent,
    ScheduleComponent,
    MyProfilComponent,
    ConnexionComponent,
    AdminComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ScheduleModule,
    RecurrenceEditorModule
  ],
  providers: [DayService , WeekService , WorkWeekService , MonthService , MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
