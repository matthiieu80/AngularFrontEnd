import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddUserComponent} from './components/add-users/add-product.component';

import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SuppProductComponent } from './components/supp-product/supp-product.component';
import { UserListComponent } from './components/user-list/user-list.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUserComponent,

    ProductDetailsComponent,
    SuppProductComponent,
    UserListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
