import { Component } from '@angular/core';
import { Card } from '../card-padrao-acoes/card-padrao-acoes';
import { CardPadraoResumoFin } from '../card-padrao-resumo-fin/card-padrao-resumo-fin';

@Component({
  selector: 'app-card-relatorio',
  imports: [CardPadraoResumoFin],
  templateUrl: './card-relatorio.html',
  styleUrl: './card-relatorio.scss',
})
export class CardRelatorio {
}
