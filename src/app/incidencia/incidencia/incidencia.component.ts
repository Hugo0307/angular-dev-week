import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Incidencia } from './../model/incidencia';
import { IncidenciaService } from './../service/incidencia.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit, OnDestroy {

  incidencias: Incidencia[] = [];
  displayedColumns = ['id', 'regiao_id', 'mes', 'faixa_id', 'qnt_exames'];

  readonly subscription = new Subscription();

  constructor(private incidenciaService: IncidenciaService) { }

  ngOnInit(): void {
    this.incidenciaService.listIncidencias().subscribe((incidencias => {
      this.incidencias = incidencias;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
