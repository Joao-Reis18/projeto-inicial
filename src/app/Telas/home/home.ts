import { Component } from '@angular/core';
import { Card } from '../../Componentes/card-padrao-acoes/card-padrao-acoes';
import { RouterLink } from '@angular/router';
import { CardRelatorio } from '../../Componentes/card-relatorio/card-relatorio';
import { PadraoCard } from '../../Componentes/padrao-card/padrao-card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card, RouterLink, CardRelatorio, PadraoCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
