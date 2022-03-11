import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { IncidenciaRoutingModule } from './incidencia-routing.module';
import { IncidenciaComponent } from './incidencia/incidencia.component';


@NgModule({
  declarations: [
    IncidenciaComponent
  ],
  imports: [
    CommonModule,
    IncidenciaRoutingModule,
    AppMaterialModule
  ]
})
export class IncidenciaModule { }
