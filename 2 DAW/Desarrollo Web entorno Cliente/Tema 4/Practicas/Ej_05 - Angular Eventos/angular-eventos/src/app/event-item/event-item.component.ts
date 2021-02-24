 import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EventosShowComponent } from '../eventos-show/eventos-show.component';
import { EventFilterPipe } from '../eventos-show/event-filter.pipe';
import { Evento } from '../eventos-show/evento';


@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {


  @Input() IEvento: Evento;
  @Input() EventFilterPipe: EventFilterPipe;

  @Output() delete = new EventEmitter<void>();


  deleteEvento(nombre: string){
    this.delete.emit();
    console.log(nombre);
  }

  constructor() {
    this.IEvento = {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    }
    this.EventFilterPipe = new EventFilterPipe();
  }

  ngOnInit(): void {
  }





}
