import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../security/services/auth.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  type: string = '';
  hide: boolean = false;
  ngOnInit(): void {
  }
  constructor(private router: Router,
              private authService: AuthService) {
  }
  public getCurrentUserEmail(){
    let currentUserString = this.authService.getCurrentUser();
      if (currentUserString) {
        console.log(`current user: ${ currentUserString}`);
        let currentUser = JSON.parse(currentUserString);
        console.log(currentUser);
        return currentUser.email;
      } else {
        return null;
      }
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['home']).then();
    console.log("Signed Out");
  }

  goToProfile(){
    this.router.navigate(['profile']).then();
    console.log('profile')
  }
  goToProfileBusiness(){
    this.router.navigate(['profile-business']).then();
    console.log('profile')
  }
  // openDialog() {
  //   this.dialog.open(DialogElements);
  // }
}
// @Component({
//   selector: 'dialog-elements',
//   templateUrl: './dialog-elements.html',
// })
// export class DialogElements {}
