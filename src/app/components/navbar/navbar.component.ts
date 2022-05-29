import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../security/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";
import { NavbarService } from "./service/navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hide: boolean = false;
  type: string = '';
  ngOnInit(): void {
    this.type = this.service.type;
  }

  constructor(private router: Router,
              private authService: AuthService,
              public dialog: MatDialog,
              public service: NavbarService) {
  }

  public getCurrentTargetSegment(){
    return this.authService.getValidatedData('type')
  }
  public getCurrentUserEmail() {
    console.log(this.service.type)
    return this.authService.getValidatedData('email');
  }
  public getCurrentFirstName() {
    let currentUserString = this.authService.getCurrentUser();
    if (currentUserString) {
      console.log(currentUserString);
      let currentUser = JSON.parse(currentUserString);
      console.log(currentUser['firstName']);
      return currentUser.firstName;
    } else {
      return null;
    }
  }
  public getCurrentLastName() {
    return this.authService.getValidatedData('lastName');
  }
  public getCurrentName() {
    return this.authService.getValidatedData('name');
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['home']).then();
    console.log("Signed Out");
  }

  goToProfile() {
    this.router.navigate(['profile']).then();
    console.log('profile')
  }

  goToProfileBusiness() {
    this.router.navigate(['profile-business']).then();
    console.log('profile')
  }
  openDialog(){
    this.dialog.open(DialogComponent);
  }
  isSignedIn(){
    return this.authService.isSignedIn();
  }
}
