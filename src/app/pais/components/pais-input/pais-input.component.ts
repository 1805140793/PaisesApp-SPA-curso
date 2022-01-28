import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  //evento onEnter Se recomienda poner on para saber que es un evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //se va a emitir un evento de tipo string(termino)
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();  //Se ejecuta cuando el usuario deje de escribir
  
  @Input() placeholder: string='';  
  termino: string ='';

  debouncer: Subject<string> = new Subject();  //observable de tipo Subject


  //se dispara solo una vez cuando el componente esta inicializado y creados
  ngOnInit(): void {
    //subscribo al debouncer   
    this.debouncer
        .pipe(debounceTime(300)) //pide cuantas milesimas de segundo quiere esperar antes de suscribir
        .subscribe( valor => { //un obsersabke permite ejecutar operadores rx
          //console.log('debouncer', valor);
          this.onDebounce.emit(valor);    //mando a emitir el onDebounce
    });
  }

  //cuando presiono enter se ejecuta el método buscar
  buscar(){
    this.onEnter.emit(this.termino);  //emito el termino quer ingresa el usuario    
  }

  teclaPresionada(){
    //cada vez que presiono una tecla va a mandar a llamar el next que esta suscrito en el ngOnInit
    this.debouncer.next(this.termino);    
  }
}
