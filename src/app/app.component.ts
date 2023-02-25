import { Component } from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";

import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private TokenStorageService : TokenStorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.TokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.inculdes('ROLE_MODERATEUR');
      this.username = user.username;
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });


  }
}
