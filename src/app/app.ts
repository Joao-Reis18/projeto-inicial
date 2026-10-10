import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./Componentes/card-padrao-acoes/card-padrao-acoes";
import { CardTituloPagina } from "./Componentes/card-titulo-pagina/card-titulo-pagina";
import { MatIcon } from "@angular/material/icon";
import { CardRelatorio } from './Componentes/card-relatorio/card-relatorio';

@Component({
  selector: 'app-root',
  imports: [Card, CardTituloPagina, CardRelatorio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-inicial');
}
