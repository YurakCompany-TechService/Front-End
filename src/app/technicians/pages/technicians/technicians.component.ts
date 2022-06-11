import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../security/services/auth.service";

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.css']
})
export class TechniciansComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  public getFirstName(){
    return this.authService.getValidatedData('firstName')
  }
  public getLastName(){
    return this.authService.getValidatedData('lastName');
  }
  public getPhone(){
    return this.authService.getValidatedData('phone');
  }
  public getEmail(){
    return this.authService.getValidatedData('email');
  }
  public getGender(){
    return this.authService.getValidatedData('gender');
  }
  public getArea(){
    return this.authService.getValidatedData('area');
  }
  public getBrand(){
    return this.authService.getValidatedData('brand');
  }

}
