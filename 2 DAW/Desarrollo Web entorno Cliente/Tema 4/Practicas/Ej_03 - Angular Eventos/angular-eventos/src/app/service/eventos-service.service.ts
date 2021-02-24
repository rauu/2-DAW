import { Injectable } from '@angular/core';
import { Evento } from '../eventos-show/evento';


@Injectable({
  providedIn: 'root'
})
export class EventosServiceService {


  constructor() {
  }

 /* IEventos: Evento = [
    {
      title: "Evento de prueba",
      image: "assets/eventos1.jpg",
      date: "2019-03-15",
      description: "Esto es una prueba",
      price: 23.95
    },
    {
      title: "Evento de prueba 2",
      image: "assets/eventos2.jpg",
      date: "2019/04/21",
      description: "Este es peor",
      price: 15.5
    }
  ];*/

  getEvento(): Evento[] {
    return [{
      title: "Evento de prueba",
      image: "assets/eventos1.jpg",
      date: "2019-03-15",
      description: "Esto es una prueba",
      price: 23.95
    },
    {
      title: "Evento de prueba 2",
      image: "assets/eventos2.jpg",
      date: "2019/04/21",
      description: "Este es peor",
      price: 15.5
    }];
  }
}
