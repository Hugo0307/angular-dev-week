import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FaixaEtaria } from './../model/faixa-etaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor(private http: HttpClient) { }

  listFaixaEtaria() {
    const API_URL = '/api/faixaetaria';
    return this.http.get<FaixaEtaria[]>(API_URL);
  }
}
