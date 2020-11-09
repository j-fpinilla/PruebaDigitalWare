import { Desarrollador } from './../boton-agregar/desarrollador.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {

  @Input() desarrollador: Desarrollador;
  @Input() indice: number ;

  constructor() { }

  ngOnInit(): void {
  }

}
