import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo: 'regioes'
  },
  {
    path: 'regioes',
    loadChildren: () => import('./regioes/regioes.module').then(m => m.RegioesModule)
  },
  {
    path: 'faixaetaria',
    loadChildren: () => import('./faixa-etaria/faixa-etaria.module').then(m => m.FaixaEtariaModule)
  },
  {
    path: 'incidencia',
    loadChildren: () => import('./incidencia/incidencia.module').then(m => m.IncidenciaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
