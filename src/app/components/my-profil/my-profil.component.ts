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

  @ViewChild("dialogLog")
  dialogLog!: ElementRef;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser;
  }

  getUser():void{
    this.userService.fetchUser()
    .subscribe((user: User[]) => this.user = user);
  }

  updateUser(currentUser: User){
    //TODO
  }

}
