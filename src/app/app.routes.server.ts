import { Component } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import path from 'path';
import { CadastrarSabor } from './Telas/cadastrar-sabor/cadastrar-sabor';
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];



