import { Injectable } from '@angular/core';

import { Regioes } from './../model/regioes';

@Injectable({
  providedIn: 'root'
})
export class RegioesService {

  constructor( ) { }

  listRegioes(): Regioes[] {
    return [
      { id:1, regiao: 'Nordeste', total_exames: 2450 }
    ];
  }
}
