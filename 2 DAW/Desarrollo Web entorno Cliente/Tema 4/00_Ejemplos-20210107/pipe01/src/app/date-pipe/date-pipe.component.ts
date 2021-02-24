import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {
  fecha: Date = new Date(1982, 4, 7, 12, 40, 11); //7 de Mayo del 1982 12:40:11

  constructor() { }

  ngOnInit() {
  }

}
