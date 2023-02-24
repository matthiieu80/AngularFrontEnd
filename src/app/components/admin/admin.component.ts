import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // seConnecter(): void {
  //   if (this.authService.checkTokenValidity(this.token)) {
  //     // Connecter l'administrateur
  //   } else {
  //     this.erreur = true;
  //   }
  // }

  // seDeconnecter(){
  //   this.authService.deconnecter();
  //   this.router.navigateByUrl('/connexion');
  // }




}
