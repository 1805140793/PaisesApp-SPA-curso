import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Componentes creados por el usuario
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  //para poder utilizar en otros lado se debe exportar
  exports: [
    SidebarComponent
  ]
  
})
export class SharedModule { }
