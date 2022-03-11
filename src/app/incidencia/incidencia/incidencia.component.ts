import { Component, OnInit } from '@angular/core';

import { Incidencia } from './../model/incidencia';
import { IncidenciaService } from './../service/incidencia.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  incidencias: Incidencia[] = [];
  displayedColumns = ['id', 'regiao_id', 'mes', 'faixa_id', 'qnt_exames'];

  constructor(private incidenciaService: IncidenciaService) { }

  ngOnInit(): void {
    this.incidencias = this.incidenciaService.listIncidencias();
  }

}
