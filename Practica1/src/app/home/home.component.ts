import { Component, OnInit } from '@angular/core';

import { Persona } from './../models/persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  empresaArray: Persona [] = [
    {id: 1, rfc: "ZATM990325HCLMVGN8", name: "Manuel Alejandro", ap_paterno: "Zamora",ap_materno:"Tovar",
    sexo:"Masculino", edad: 21, direccion:"San jose del cabo #40 California", correo:"rocker2503@gmail.com"
  }
  ];


  selectedpersona: Persona = new Persona();

  openForEdit(persona: Persona){
    this.selectedpersona = persona;
  }

  addOrEdit(){
    if (this.selectedpersona.id === 0){
      this.selectedpersona.id = this.empresaArray.length + 1;
      this.empresaArray.push(this.selectedpersona);
    }
    this.selectedpersona = new Persona();
  }
  delete(){
   if(confirm('Eliminar la persona?')){
     this.empresaArray = this.empresaArray.filter(x => x != this.selectedpersona);
     this.selectedpersona = new Persona();
   }
  }

}
