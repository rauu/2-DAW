import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Evento} from '../eventos-show/evento';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  newEvento: Evento;
  @Output() pasarArray = new EventEmitter<Evento>();

  constructor() {
    this.newEvento =
    {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    };
   }

  ngOnInit(): void {
  }



  /*addEvent() {
   this.newEvento = {
      title: this.newEvento.title,
      image: this.newEvento.image,
      date: this.newEvento.date,
      description: this.newEvento.description,
      price: this.newEvento.price
    };
    this.pasarArray.emit(this.newEvento);
    console.log(this.newEvento);
    this.resetEvento();
  }*/
  addEvent() {
   let event: Evento = {
    title: this.newEvento.title,
    image: this.newEvento.image,
    date: this.newEvento.date,
    description: this.newEvento.description,
    price: this.newEvento.price
   }
   this.pasarArray.emit(event);
    this.resetEvento();
  }


  private resetEvento() {
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
