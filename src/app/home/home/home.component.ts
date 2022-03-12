import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  longText = ['O câncer de mama é uma doença causada pela multiplicação desordenada de células anormais da mama, que forma um tumor com potencial de invadir outros órgãos. Há vários tipos de câncer de mama. Alguns têm desenvolvimento rápido, enquanto outros crescem lentamente. A maioria dos casos, quando tratados adequadamente e em tempo oportuno, apresentam bom prognóstico. O câncer de mama também acomete homens, porém é raro, representando apenas 1% do total de casos da doença.'
  +' O Sistema Único de Saúde (SUS) oferece tratamento para o câncer de mama em Unidades Hospitalares especializadas. Fonte: https://www.inca.gov.br/tipos-de-cancer/cancer-de-mama'];

  constructor() { }

  ngOnInit(): void {
  }

}
