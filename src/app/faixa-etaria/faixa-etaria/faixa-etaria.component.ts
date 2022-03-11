import { Component, OnInit } from '@angular/core';

import { FaixaEtaria } from './../model/faixa-etaria';
import { FaixaEtariaService } from './../service/faixa-etaria.service';

@Component({
  selector: 'app-faixa-etaria',
  templateUrl: './faixa-etaria.component.html',
  styleUrls: ['./faixa-etaria.component.css']
})
export class FaixaEtariaComponent implements OnInit {

  faixaEtaria: FaixaEtaria[] = [];
  displayedColumns = ['id', 'faixa_i', 'faixa_n', 'descricao'];

  constructor(private faixaEtariaService: FaixaEtariaService) { }

  ngOnInit(): void {
    this.faixaEtaria = this.faixaEtariaService.listFaixaEtaria();
  }

}
