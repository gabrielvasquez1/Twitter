import { Component, OnInit } from '@angular/core';
import { Twitt } from '../model/twitt';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {

  miTwitt: Twitt;

  constructor() {
    this.miTwitt = {
      nombre: 'Gabriel',
      apellido: 'Vásquez',
      usuario: 'gfvasquez',
      twitt:'Este es el twitt'
      };
   }

  ngOnInit() {
  }

}
