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

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  seDeconnecter(){
    this.authService.deconnecter();
    this.router.navigateByUrl('/connexion');
  }




}
