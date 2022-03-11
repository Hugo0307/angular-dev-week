import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor() { }

  listFaixaEtaria() {
    return [
      { id: 1, faixa_i: 10, faixa_n: 15, descricao: 'Entre 10 e 15 anos'}
    ];
  }
}
