import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from "@angular/material/icon";

@Component({
  standalone: true, 
  selector: 'app-card-titulo-pagina',
  imports: [MatToolbarModule, MatIcon],
  templateUrl: './card-titulo-pagina.html',
  styleUrl: './card-titulo-pagina.scss',
})
export class CardTituloPagina {
}
