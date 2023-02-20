import {Component} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddUserComponent {

  Users = {
    username: '',
    adresseMail: '',
    phoneNumber: '',
    firstname: '',
    lastname: '',
    password: '',
  };

  constructor(private userService: UserService) { }

  addUsers() {
    this.userService
      .createUser(this.Users)
      .subscribe(ok => {
        alert('Utilisateur bien ajouté')
      })
  }




}
