import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Libro = {"titulo": "Hamlet", "autor": "William Shakespeare", "precio": 21.30, "stock": 5, "cantidad": 0, "imagen": "assets/old-books.jpg"};

  downCantidad(libro){
    if (libro.cantidad > 0 ) libro.cantidad--;
  }
  upCantidad(libro){
    if (libro.cantidad < libro.stock ) libro.cantidad++;
  }
  getCoord(event) {  console.log(event.clientX + ", " + event.clientY); }
}
