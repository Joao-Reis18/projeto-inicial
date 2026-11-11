import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule, MatIcon, } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-padrao-resumo-fin',
  standalone: true,
  imports: [MatIcon, NgIf, MatCardModule],
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
