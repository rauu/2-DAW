import { Component, OnInit, Input } from '@angular/core';
import { Evento } from './evento';
import { EventosServiceService } from '../service/eventos-service.service';


@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {
  IEventos: Evento[];


  filterSearch = "";


  constructor(private service: EventosServiceService) {
    this.IEventos = [];
  }


  addForm(event : Evento) {
    this.IEventos.push(event);
  }


  ngOnInit(): void {

    this.IEventos = this.service.getEvento();

  }

  //Funcion para ordenar por precio
  precio() {
    this.IEventos.sort((a, b) => (a.price > b.price) ? 1 : -1)
  }
  //Funcion para ordenar por fecha
  fecha() {
    this.IEventos.sort((a, b) => (a.date > b.date) ? 1 : -1)
  }


  delete(deleteEvent: string) {

    for (let x = 0; x <= this.IEventos.length; x++) {
      if (deleteEvent == this.IEventos[x].title) {
        console.log(this.IEventos);
        this.IEventos.splice(x, 1);
        console.log(this.IEventos);
        console.log(x);
      }
    }
  }




}
