import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';


import { appRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Modulos
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    PaisModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
