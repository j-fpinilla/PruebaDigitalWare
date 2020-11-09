import { Desarrollador } from './desarrollador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})
export class BotonAgregarComponent implements OnInit {

  contDesarrollador: number;
  desarrollador: Desarrollador[] = [new Desarrollador()];

  constructor() { }

  ngOnInit(): void {
  }

  onAgregarDesarrollador(){
    let desarrollador1 = new Desarrollador();
    this.desarrollador.push(desarrollador1);
  }

}
