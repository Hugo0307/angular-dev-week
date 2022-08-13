import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FaixaEtaria } from './../model/faixa-etaria';
import { FaixaEtariaService } from './../service/faixa-etaria.service';

@Component({
  selector: 'app-faixa-etaria',
  templateUrl: './faixa-etaria.component.html',
  styleUrls: ['./faixa-etaria.component.css']
})
export class FaixaEtariaComponent implements OnInit, OnDestroy {

  faixaEtaria: FaixaEtaria[] = [];
  displayedColumns = ['id', 'faixa_i', 'faixa_n', 'descricao'];

  readonly subscriptions = new Subscription();

  constructor(private faixaEtariaService: FaixaEtariaService) { }

  ngOnInit(): void {
    const subscription = this.faixaEtariaService.listFaixaEtaria().subscribe((faixaEtaria => {
      this.faixaEtaria = faixaEtaria;
    }));

    this.subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
