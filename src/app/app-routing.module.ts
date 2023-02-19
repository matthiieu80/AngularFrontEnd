import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddUserComponent} from "./components/add-users/add-product.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {UserListComponent} from "./components/user-list/user-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},

  {path: 'users', component: UserListComponent},
  {path: 'add-product', component: AddUserComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
