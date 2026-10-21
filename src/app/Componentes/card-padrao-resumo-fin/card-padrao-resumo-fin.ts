import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule, MatIcon, } from '@angular/material/icon';

@Component({
  selector: 'app-card-padrao-resumo-fin',
  standalone: true,
  imports: [MatIcon, NgIf],
  templateUrl: './card-padrao-resumo-fin.html',
  styleUrl: './card-padrao-resumo-fin.scss',
})
export class CardPadraoResumoFin {
  titulo = input('');
  corTitulo = input('');
  corCard = input('');
  corTituloLetra= input('');
  corDescricaoLetra=input('');
  icone=input('');
  descricao=input('')
  bordacard=input('')
}
