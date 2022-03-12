import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FaixaEtariaModule } from '../faixa-etaria/faixa-etaria.module';
import { IncidenciaModule } from './../incidencia/incidencia.module';
import { RegioesModule } from './../regioes/regioes.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    RegioesModule,
    FaixaEtariaModule,
    IncidenciaModule
  ]
})
export class HomeModule { }
