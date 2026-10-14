import { Component } from '@angular/core';
import { Card } from '../../Componentes/card-padrao-acoes/card-padrao-acoes';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardRelatorio } from '../../Componentes/card-relatorio/card-relatorio';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card, RouterLink, RouterOutlet, CardRelatorio],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
