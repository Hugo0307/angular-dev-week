import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FaixaEtariaRoutingModule } from './faixa-etaria-routing.module';
import { FaixaEtariaComponent } from './faixa-etaria/faixa-etaria.component';


@NgModule({
  declarations: [
    FaixaEtariaComponent
  ],
  imports: [
    CommonModule,
    FaixaEtariaRoutingModule,
    AppMaterialModule
  ],
  exports: [ FaixaEtariaComponent ]
})
export class FaixaEtariaModule { }
