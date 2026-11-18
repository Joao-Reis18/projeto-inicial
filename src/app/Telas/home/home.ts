import { Component, ViewChild, ElementRef } from '@angular/core';
import { Card } from '../../Componentes/card-padrao-acoes/card-padrao-acoes';
import { RouterLink } from '@angular/router';
import { CardRelatorio } from '../../Componentes/card-relatorio/card-relatorio';
import { PadraoCard } from '../../Componentes/padrao-card/padrao-card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card, RouterLink, CardRelatorio, PadraoCard, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  @ViewChild('listaContainer', {read: ElementRef}) listaContainer!: ElementRef;

  rolarEsquerda(){
    this.listaContainer.nativeElement.scrollBy({left: -300, behavior: 'smooth'})
  }

  rolarDireita(){
    this.listaContainer.nativeElement.scrollBy({left: 300, behavior: 'smooth'})
  }
}
