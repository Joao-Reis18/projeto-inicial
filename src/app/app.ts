import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card-padrao-acoes/card-padrao-acoes";
import { CardTituloPagina } from "./card-titulo-pagina/card-titulo-pagina";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-root',
  imports: [Card, CardTituloPagina, RouterOutlet, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-inicial');
}
