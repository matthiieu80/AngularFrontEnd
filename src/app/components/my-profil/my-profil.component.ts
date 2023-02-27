import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css'],
})
export class MyProfilComponent implements OnInit {

  currentUser! : User

  @ViewChild("dialogLog")
  dialogLog!: ElementRef;

  constructor(private userService: UserService, private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.fetchUserProfil()
    .subscribe((user: User) => this.currentUser = user);
  }

  updateUser(currentUser: User){
    this.userService.updateUser(currentUser)
      .subscribe((user: User) => this.currentUser = user)
  }
}
