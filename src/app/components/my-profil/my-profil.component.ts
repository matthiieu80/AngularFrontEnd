import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent implements OnInit {
  Users = {
    username: '',
    adresseMail: '',
    phoneNumber: '',
    firstname: '',
    lastname: '',
    password: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
