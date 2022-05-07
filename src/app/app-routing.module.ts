import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/home/home.component";
import {HelpComponent} from "./public/help/help.component";
import {CasesComponent} from "./public/cases/pages/cases.component";
import {TechniciansComponent} from "./technicians/pages/technicians/technicians.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'technicians', component: TechniciansComponent },
  { path: 'help', component: HelpComponent },
  { path: 'cases', component: CasesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
