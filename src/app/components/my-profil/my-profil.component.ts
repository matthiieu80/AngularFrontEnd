import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {User} from "../../models/user";

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
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

}
