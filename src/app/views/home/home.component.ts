import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {path: 'https://miro.medium.com/max/512/1*gtivoXf3wX0sDj16YQ1sXQ.jpeg'},
    {path: 'https://blog.up.edu.mx/hubfs/Blog/2019/Enero/ingenieria-inteligencia-artificial-%20programcion-competitiva-up-ags.png'},
  ]
}
