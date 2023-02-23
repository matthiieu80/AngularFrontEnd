import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DialogService } from 'src/app/services/dialog.service';
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
    private userService: UserService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getUser;
  }

  showClickUpdateUsername() {
    this.dialogService.showDialog(this.dialogLog.nativeElement, {
      content: `<table style="border-collapse: separate;border-spacing: 10px;width:85%;margin: 0px -5px 0px;">
                <tr>
                    <td>Modifier votre pseudo:</td>
                </tr>
                <tr>
                    <td><span class="e-input-group">
                    <input type="text" id="username" (focus)='onFocus()' (blur)='onBlur()' name="Required" class="e-input" />
                    </span></td>
                </tr>
            </table>`,
            buttons:  [{ click: this.hideClick.bind(this), buttonModel: { content: 'Valider', isPrimary: true } }, { click: this.hideClick.bind(this), buttonModel: { content: 'Annuler' } }]
    });
  }
 
  hideClick() {
   this.dialogService.hideDialog();
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
