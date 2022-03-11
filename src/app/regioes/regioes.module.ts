import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegioesRoutingModule } from './regioes-routing.module';
import { RegioesComponent } from './regioes/regioes.component';


@NgModule({
  declarations: [
    RegioesComponent
  ],
  imports: [
    CommonModule,
    RegioesRoutingModule
  ]
})
export class RegioesModule { }
