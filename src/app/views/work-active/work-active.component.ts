import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { catchError, Observable, retry } from "rxjs";
//import { RequestInfo } from "../../model/requestInfo";


@Component({
  selector: 'app-work-active',
  templateUrl: './work-active.component.html',
  styleUrls: ['./work-active.component.css']
})
export class WorkActiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
