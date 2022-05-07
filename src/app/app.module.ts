import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './public/home/home.component';
import { TechniciansComponent } from './technicians/pages/technicians/technicians.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { NotificationsComponent } from './public/notifications/notifications.component';
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import { ServiceshistoryComponent } from './public/serviceshistory/serviceshistory.component';
import { CompaniesComponent } from './companies/pages/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechniciansComponent,
    NotificationsComponent,
    ServiceshistoryComponent,
    CompaniesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
