import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card-padrao-acoes',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
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
  bordacard=input('')
  descricao=input('')
}
