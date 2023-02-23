import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import {User} from "../../models/user";

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css'],
})
export class MyProfilComponent implements OnInit {

  user: User []= [];

  User = {
    username: 'kuribohk',
    adresseMail: 'kuriboh@ygo.com',
    phoneNumber: '0986523235',
    firstname: 'Kuriboh',
    lastname: 'Kowalczuk',
    password: ''
  };

  @ViewChild("dialogLog")
  dialogLog!: ElementRef;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser;
  }

  getUser():void{
    this.userService.fetchUser()
    .subscribe((user: User[]) => this.user = user);
  }

  updateUsername(){
    let saisie = prompt("Nouveau nom d'utilisateur :");
        if (saisie == null || saisie == "") {
            prompt("Modification annulée");
        } else {
            //TODO: Call update method
            prompt("Nom d'utilisateur mis à jour");
        } 
  }

}
