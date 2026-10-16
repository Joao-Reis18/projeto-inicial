import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true, 
  selector: 'app-padrao-card',
  imports: [MatToolbarModule],
  templateUrl: './padrao-card.html',
  styleUrl: './padrao-card.scss',
})
export class PadraoCard {
}
