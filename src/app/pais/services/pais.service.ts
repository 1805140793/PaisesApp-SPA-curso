import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //base de la URL que estoy llamando
  private apiUrl:string = 'https://restcountries.com/v3.1'

  //Para ocupar el servicio HTTP necesitamos la inyeccion de dependencias
  constructor(private http:HttpClient) { }

  //Mediante el quictype obtengo la interface de la respuesta (PAIS)
  buscarPais(termino:string):Observable <Pais[]> {
    //url base + el termino o argumento que el usuario mande a buscar
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(termino:string):Observable <Pais[]> {
    //url base + termino para mandar a buscar
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  //solo retorno un pais, ya no un arreglo como los anteriores
 getPaisPorId(id:string):Observable <Pais> {
    //url base + id del pais que quiero buscar
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);  //retorno un pais 
  }
}
