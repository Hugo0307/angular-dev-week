import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { IncidenciaRoutingModule } from './incidencia-routing.module';
import { IncidenciaComponent } from './incidencia/incidencia.component';


@NgModule({
  declarations: [
    IncidenciaComponent
  ],
  imports: [
    CommonModule,
    IncidenciaRoutingModule,
    MatCardModule,
    MatTableModule
  ]
})
export class IncidenciaModule { }
