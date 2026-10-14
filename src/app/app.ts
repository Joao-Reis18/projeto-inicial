import { Component, signal } from '@angular/core';
import { Navbar } from './Componentes/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-inicial');
}
