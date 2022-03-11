import { FaixaEtariaComponent } from './faixa-etaria/faixa-etaria.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FaixaEtariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaixaEtariaRoutingModule { }
