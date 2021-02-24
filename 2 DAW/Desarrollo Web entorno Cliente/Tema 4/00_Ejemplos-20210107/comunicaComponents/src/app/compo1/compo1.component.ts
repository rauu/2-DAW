import { Component, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
//Ojo con los imports, debemos añadir Input y Output
@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {
    @Input() valor1pasado: string; //Cogemos los valores del padre
    @Input() valor2pasado: string; //Cogemos los valores del padre
    aux1: number;
    aux2: number;
    @Output() //Usamos decorador
    envRes: EventEmitter<number> = new EventEmitter<number>();
    //Clase para emitir evento hacia el padre

    ngAfterContentChecked() { //Tras cada comprobación del contenido del componente.
        this.aux1 = parseFloat(this.valor1pasado);
        this.aux2 = parseFloat(this.valor2pasado);
    }

    //Emitimos datos hacia el padre
    suma()       { this.envRes.emit(this.aux1 + this.aux2); }
    resta()      { this.envRes.emit(this.aux1 - this.aux2); }
    multiplica() { this.envRes.emit(this.aux1 * this.aux2); }
    divide()     { this.envRes.emit(this.aux1 / this.aux2); }
}
