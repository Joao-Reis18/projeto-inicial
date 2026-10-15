import { Component, input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from "@angular/material/icon";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true, 
  selector: 'app-padrao-card',
  imports: [MatToolbarModule],
  templateUrl: './padrao-card.html',
  styleUrl: './padrao-card.scss',
})
export class PadraoCard {
  tituloPagina = input('')
}
