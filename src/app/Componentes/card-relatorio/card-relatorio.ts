import { Component } from '@angular/core';
import { Card } from '../card-padrao-acoes/card-padrao-acoes';
import { CardPadraoResumoFin } from '../card-padrao-resumo-fin/card-padrao-resumo-fin';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-relatorio',
  standalone: true,
  imports: [CardPadraoResumoFin, MatCardModule],
  templateUrl: './card-relatorio.html',
  styleUrl: './card-relatorio.scss',
})
export class CardRelatorio {
}
