import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from "@angular/material/icon";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true, 
  selector: 'app-padrao-card',
  imports: [MatToolbarModule, MatIcon, RouterLink, RouterOutlet],
  templateUrl: './padrao-card.html',
  styleUrl: './padrao-card.scss',
})
export class PadraoCard {
}
