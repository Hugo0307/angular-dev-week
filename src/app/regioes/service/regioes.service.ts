import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Regioes } from './../model/regioes';

@Injectable({
  providedIn: 'root'
})
export class RegioesService {

  constructor(private http: HttpClient) { }

  listRegioes(): Observable<Regioes[]> {
    const API_URL = '/api/regioes';
    return this.http.get<Regioes[]>(API_URL);
  }

}
