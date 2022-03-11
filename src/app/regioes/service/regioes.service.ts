import { Regioes } from './../model/regioes';
import { Injectable } from '@angular/core';

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
