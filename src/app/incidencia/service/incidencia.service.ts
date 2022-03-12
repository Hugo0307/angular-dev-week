import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Incidencia } from '../model/incidencia';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  constructor(private http: HttpClient) { }

  listIncidencias(): Observable<Incidencia[]> {
    const API_URL = '/api/incidencia';
    return this.http.get<Incidencia[]>(API_URL);
  }
}
