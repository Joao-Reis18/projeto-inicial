import { Component, signal } from '@angular/core';
import { PadraoCard } from './Componentes/padrao-card/padrao-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PadraoCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-inicial');
}
