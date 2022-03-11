import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { RegioesRoutingModule } from './regioes-routing.module';
import { RegioesComponent } from './regioes/regioes.component';



@NgModule({
  declarations: [
    RegioesComponent
  ],
  imports: [
    CommonModule,
    RegioesRoutingModule,
    AppMaterialModule
  ]
})
export class RegioesModule { }
