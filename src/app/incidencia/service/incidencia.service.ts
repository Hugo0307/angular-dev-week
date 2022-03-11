import { Injectable } from '@angular/core';

import { Incidencia } from '../model/incidencia';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  constructor() { }

  listIncidencias(): Incidencia[] {
    return [
      { id: 1, regiao_id: 2, mes: 10, faixa_id: 1, qnt_exames: 201 }
    ];
  }
}
