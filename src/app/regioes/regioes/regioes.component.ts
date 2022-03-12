import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Regioes } from '../model/regioes';
import { RegioesService } from './../service/regioes.service';

@Component({
  selector: 'app-regioes',
  templateUrl: './regioes.component.html',
  styleUrls: ['./regioes.component.css']
})
export class RegioesComponent implements OnInit, OnDestroy {

  regioes: Regioes[] = [];
  displayedColumns = ['id', 'regiao', 'total_exames'];

  readonly subscriptions = new Subscription();

  constructor(private regioesService: RegioesService) { }

  ngOnInit(): void {
    this.regioesService.listRegioes().subscribe((regioes => {
      this.regioes = regioes;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}
