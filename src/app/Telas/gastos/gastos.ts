import { Component } from '@angular/core';
import { PadraoCard } from '../../Componentes/padrao-card/padrao-card';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [PadraoCard],
  templateUrl: './gastos.html',
  styleUrl: './gastos.scss',
})
export class Gastos {}
