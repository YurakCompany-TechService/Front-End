import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../security/services/auth.service";

@Component({
  selector: 'app-profile-business',
  templateUrl: './profile-business.component.html',
  styleUrls: ['./profile-business.component.css']
})
export class ProfileBusinessComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }
  public getName(){
    let name = this.authService.getName();
    if (name) {
      console.log(`name user: ${ name}`);
      let currentUser = JSON.parse(name);
      console.log(currentUser);
      return currentUser.name;
    } else {
      return null;
    }
  }
  public getSubscription(){
    let subscription = this.authService.getSubscription();
    if (subscription) {
      console.log(`subscription user: ${ subscription}`);
      let currentUser = JSON.parse(subscription);
      console.log(currentUser);
      return currentUser.subscription;
    } else {
      return null;
    }
  }
  public getEmail(){
    let email = this.authService.getEmail();
    if (email) {
      console.log(`email user: ${ email}`);
      let currentUser = JSON.parse(email);
      console.log(currentUser);
      return currentUser.email;
    } else {
      return null;
    }
  }

}
