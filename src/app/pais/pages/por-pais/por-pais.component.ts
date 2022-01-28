import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino:string = '';

  //para manejar los errores en caso se no recibir nada del servicio
  hayError:boolean = false;
  paises:Pais[] = [];
  
  //Vamos a consumir nuestro srevicio
  constructor(private paisService:PaisService) { }

  //recibo un argumento
  buscar(termino:string){
    //inmediatamente que llamo al metodo, digo que no hay error
    this.hayError = false;
    this.termino = termino; //asigno el argumento que viene desde el html a la variable termino
    //console.log(this.termino)

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
        
    }, (err) => {  ///manejo de errores
      this.hayError = true;
      //si hay un error entonces muestro un arreglo vacio
      this.paises = [];
    });
  }

  sugerencias(termino: string) {
    this.hayError=false;
    //TODO crear sugerencias
  }
}
