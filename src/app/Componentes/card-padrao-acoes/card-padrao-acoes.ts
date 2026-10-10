import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-padrao-acoes',
  imports: [MatIconModule, NgIf],
  templateUrl: './card-padrao-acoes.html',
  styleUrl: './card-padrao-acoes.scss',
})
export class Card {
  titulo = input('');
  corTitulo = input('');
  corCard = input('');
  corTituloLetra= input('');
  corDescricaoLetra=input('');
  icone=input('');
}
