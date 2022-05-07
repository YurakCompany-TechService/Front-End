import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../security/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }
  public getFirstName(){
    let fname = this.authService.getFirstName();
    if (fname) {
      console.log(`first name user: ${ fname}`);
      let currentUser = JSON.parse(fname);
      console.log(currentUser);
      return currentUser.firstName;
      console.log('eso')
    } else {
      return null;
    }
  }
  public getLastName(){
    let lname = this.authService.getLastName();
    if (lname) {
      console.log(`last name user: ${ lname}`);
      let currentUser = JSON.parse(lname);
      console.log(currentUser);
      return currentUser.lastName;
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
  public getBrand(){
    let brand = this.authService.getBrand();
    if (brand) {
      console.log(`brand user: ${ brand}`);
      let currentUser = JSON.parse(brand);
      console.log(currentUser);
      return currentUser.brand;
    } else {
      return null;
    }
  }
  public getArea(){
    let area = this.authService.getArea();
    if (area) {
      console.log(`area user: ${ area}`);
      let currentUser = JSON.parse(area);
      console.log(currentUser);
      return currentUser.area;
    } else {
      return null;
    }
  }
  public getGender(){
    let gender = this.authService.getGender();
    if (gender) {
      console.log(`gender user: ${ gender}`);
      let currentUser = JSON.parse(gender);
      console.log(currentUser);
      return currentUser.gender;
    } else {
      return null;
    }
  }
  public getPhone(){
    let phone = this.authService.getPhone();
    if (phone) {
      console.log(`phone user: ${ phone}`);
      let currentUser = JSON.parse(phone);
      console.log(currentUser);
      return currentUser.phone;
    } else {
      return null;
    }
  }
  public showCompleteName(){
    return `${this.getFirstName()}  ${this.getLastName()}`;
  }
}
