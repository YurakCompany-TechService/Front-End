import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-business',
  templateUrl: './sign-up-business.component.html',
  styleUrls: ['./sign-up-business.component.css']
})
export class SignUpBusinessComponent implements OnInit {
  public hide: boolean = true;
  signUpForm: FormGroup;
  constructor(private builder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.signUpForm = this.builder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      subscription: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: [0, [Validators.required, Validators.maxLength(9)]],
      creditCard: ['', [Validators.required]],
      creditCardCVV: ['', [Validators.required]]
    });
  }
  get email() { return this.signUpForm.controls['email'];}
  get password() { return this.signUpForm.controls['password'];}
  get name() {return this.signUpForm.controls['name'];}
  get address() {return this.signUpForm.controls['address'];}
  get phone() {return this.signUpForm.controls['phone'];}
  get creditCard() {return this.signUpForm.controls['creditCard'];}
  get creditCardCVV() {return this.signUpForm.controls['creditCardCVV'];}
  get subscription() {return this.signUpForm.controls['subscription'];}

  signUp(){
    this.authService.signUpB(this.signUpForm.value).subscribe((response: any)=>{
      this.authService.setName(JSON.stringify(response.user));
      this.authService.setAddress(JSON.stringify(response.user));
      this.authService.setEmail(JSON.stringify(response.user));
      this.authService.setCreditCard(JSON.stringify(response.user));
      this.authService.setCreditCardCVV(JSON.stringify(response.user));
      this.authService.setPhone(JSON.stringify(response.user));
      this.authService.setSubscription(JSON.stringify(response.user));
      this.signUpForm.reset();
      // go to sign in
      this.router.navigate(['sign-in']).then();
    })
  }
  cancelSignUp() {
    console.log('Cancelled');
    this.router.navigate(['home']).then();
  }
  ngOnInit(): void {
  }

}
