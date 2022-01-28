import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino:string = '';

  //para manejar los errores en caso se no recibir nada del servicio
  hayError:boolean = false;
  paises:Pais[] = [];
  
  //Vamos a consumir nuestro srevicio
  constructor(private paisService:PaisService) { }

  //recibo un argumento
  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarCapital(this.termino)
      .subscribe( (paises) => {       
        this.paises = paises;        
    }, (err) => {  
      this.hayError = true;
      this.paises = [];
    });
  }


}
