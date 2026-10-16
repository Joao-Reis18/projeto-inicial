import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PadraoCard } from '../../Componentes/padrao-card/padrao-card';

@Component({
  selector: 'app-cadastrar-sabor',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, PadraoCard],
  templateUrl: './cadastrar-sabor.html',
  styleUrl: './cadastrar-sabor.scss',
})
export class CadastrarSabor { }
