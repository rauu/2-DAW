import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  IEventos: Array<any> = [
    {
      title: "Evento de prueba",
      image: "",
      date: "2019-03-15",
      description: "Esto es una prueba",
      price: "23.95€"
    },
    {
      title: "Evento de prueba 2",
      image: "",
      date: "2019-03-21",
      description: "Este es peor",
      price: "15.5€"
    }
  ];

}
