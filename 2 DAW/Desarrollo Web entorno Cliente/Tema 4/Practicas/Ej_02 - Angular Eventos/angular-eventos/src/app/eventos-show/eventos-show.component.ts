import { Component, OnInit } from '@angular/core';
import { Evento } from './evento';


@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {
  IEventos: Evento[];
  newEvento: Evento;

  filterSearch = "";


  constructor() {
    this.IEventos = [];
    this.newEvento =
    {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    }
      ;
  }



  ngOnInit(): void {
    this.IEventos = [
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
    ];

  }

  //Funcion para ordenar por precio
  precio() {
    this.IEventos.sort((a, b) => (a.price > b.price) ? 1 : -1)
  }
  //Funcion para ordenar por fecha
  fecha() {
    this.IEventos.sort((a, b) => (a.date > b.date) ? 1 : -1)
  }

  addEvent() {
    let array: Evento = {
      title: this.newEvento.title,
      image: this.newEvento.image,
      date: this.newEvento.date,
      description: this.newEvento.description,
      price: this.newEvento.price
    };
    this.IEventos.push(array);
    this.resetEvento();
  }

  private resetEvento(){
    this.newEvento = {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    }
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result as string;
    });
  }

}
