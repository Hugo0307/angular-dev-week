import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { FaixaEtariaRoutingModule } from './faixa-etaria-routing.module';
import { FaixaEtariaComponent } from './faixa-etaria/faixa-etaria.component';


@NgModule({
  declarations: [
    FaixaEtariaComponent
  ],
  imports: [
    CommonModule,
    FaixaEtariaRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class FaixaEtariaModule { }
