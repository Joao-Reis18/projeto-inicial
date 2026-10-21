import { Component } from '@angular/core';
import { PadraoCard } from '../../Componentes/padrao-card/padrao-card';

@Component({
  selector: 'app-vender',
  standalone: true,
  imports: [PadraoCard],
  templateUrl: './vender.html',
  styleUrl: './vender.scss',
})
export class Vender {}
