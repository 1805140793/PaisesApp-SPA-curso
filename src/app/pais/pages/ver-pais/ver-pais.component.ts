import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap} from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(private activatedRoute: ActivatedRoute,
              private paisService:PaisService ) { }

  //se activa cuando hago el llamado al componente o muestro la pantalla
  ngOnInit(): void {
    /* PRIMERA FORMA
    this.activatedRoute.params    
      .subscribe( params =>{
        console.log(params.id);   //id del pais

        //llamo al metodo del servicio y me suscribo
        this.paisService.getPaisPorId(params.id)
              .subscribe(pais=>{
                console.log(pais);
              });
      });*/

      //OPERADOR RXJS
    this.activatedRoute.params
          .pipe(
            switchMap( (param)=> this.paisService.getPaisPorId(param.id)),//recibe el params (observable y eso retorna con la funcion feclha otro observable desde el servicio)
            tap(console.log)  //imprime en consola con la ayuda del tap
          )   
          .subscribe( (res : Pais[])=> 
            res.forEach(element=>{
              this.pais=element
            }));
  }

}
