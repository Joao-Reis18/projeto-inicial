import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-padrao-acoes',
  imports: [MatIconModule],
  templateUrl: './card-padrao-acoes.html',
  styleUrl: './card-padrao-acoes.scss',
})
export class Card {
  titulo = input('');
  descricao = input('');
  corTitulo = input('');
  corCard = input('');
}
