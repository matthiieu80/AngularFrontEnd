import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ScheduleComponent} from "./components/schedule/schedule.component";
import { registerLicense } from '@syncfusion/ej2-base';
import {MyProfilComponent} from "./components/my-profil/my-profil.component";
import {AdminComponent} from "./components/admin/admin.component";
import {ConnexionComponent} from "./components/connexion/connexion.component";
import { AuthGuard } from './auth.guard';
import {WeatherComponent} from "./components/weather/weather.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion'},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'admin', component: AdminComponent },
  {path: 'schedule', component: ScheduleComponent},
  {path: 'myprofil', component: MyProfilComponent},
  {path: 'weather', component: WeatherComponent},

];


registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpHaV1DQmFJfFBmQGlYd1RydUUmHVdTRHRcQl9iQH9UdEdgX3dYcnM=;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmFIYVF2R2BJelRxfF9EYUwxOX1dQl9gSXxSf0RkW31ddnxSQWc=;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxLf0x0RWFab1t6dV1MYl1BJAtUQF1hSn5Rd0xiXn1cc3JdT2Jb;MTE2MDE1MEAzMjMwMmUzNDJlMzBvbWJ6NDdzY2dsemtDVW5RWVYxb1JuaVliZnZHbXh0UXM4eVQ0VzJ5blE4PQ==;MTE2MDE1MUAzMjMwMmUzNDJlMzBUNXh0dTBXNTJxRm5pMTZOTFEvb2M0dk1nWHcxSU4vcjMxQW5kakMzV1BRPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWfFJpR2NbfE51flROal5QVBYiSV9jS31TdERqWHhccndTT2RUVQ==;MTE2MDE1M0AzMjMwMmUzNDJlMzBoM1cyRnVDajZvbk1mTXNJWmE2Wm83VnF6RFp6QVZFY1RZZHJka0dFdHRrPQ==;MTE2MDE1NEAzMjMwMmUzNDJlMzBhQjRCanVGRnVvdFNxWjZ0d2Y3bytCVXNSK2VWdHZvSW5OWjZlOFZucFZzPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxLf0x0RWFab1t6dV1MYl1BJAtUQF1hSn5Rd0xiXn1cc3NVRmNV;MTE2MDE1NkAzMjMwMmUzNDJlMzBTUVF1dVoyV1ZtZVJsUGZ4VVRzZFkvbXkyaUMxMVkrL1J0RU5jbm05ZzY0PQ==;MTE2MDE1N0AzMjMwMmUzNDJlMzBuczRVeHZ0OTBvN3BHUzhvZHNBVUFzNXNSTEo1WHkvdlBtNURmbnNvTHlJPQ==;MTE2MDE1OEAzMjMwMmUzNDJlMzBoM1cyRnVDajZvbk1mTXNJWmE2Wm83VnF6RFp6QVZFY1RZZHJka0dFdHRrPQ==');

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}