import { RegioesService } from './../service/regioes.service';
import { Component, OnInit } from '@angular/core';
import { Regioes } from '../model/regioes';

@Component({
  selector: 'app-regioes',
  templateUrl: './regioes.component.html',
  styleUrls: ['./regioes.component.css']
})
export class RegioesComponent implements OnInit {

  regioes: Regioes[] = [];
  displayedColumns = ['id', 'regiao', 'total_exames'];

  constructor(private regioesService: RegioesService) { }

  ngOnInit(): void {
    this.regioes = this.regioesService.listRegioes();
  }

}
