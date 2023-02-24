import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/stockage.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  currentUser : any;
  constructor(private storageService : StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.currentUser.getUser();
  }

}
