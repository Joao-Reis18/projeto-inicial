import { Component } from '@angular/core';
import { PadraoCard } from '../../Componentes/padrao-card/padrao-card';
import { Card } from '../../Componentes/card-padrao-acoes/card-padrao-acoes';

@Component({
  selector: 'app-relatorio-financeiro',
  standalone: true,
  imports: [PadraoCard, Card],
  templateUrl: './relatorio-financeiro.html',
  styleUrl: './relatorio-financeiro.scss',
})
export class RelatorioFinanceiro {}
