import { Component } from '@angular/core';
import { PadraoCard } from '../../Componentes/padrao-card/padrao-card';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [PadraoCard],
  templateUrl: './estoque.html',
  styleUrl: './estoque.scss',
})
export class Estoque {}
