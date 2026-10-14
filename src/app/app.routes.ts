import { Routes } from '@angular/router';
import { CadastrarSabor } from './Telas/cadastrar-sabor/cadastrar-sabor';
import { Home } from './Telas/home/home';
import { Estoque } from './Telas/estoque/estoque';
import { Gastos } from './Telas/gastos/gastos';
import { RelatorioFinanceiro } from './Telas/relatorio-financeiro/relatorio-financeiro';
import { Vender } from './Telas/vender/vender';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'cadastrar-sabor', component: CadastrarSabor },
    { path: 'home', component: Home},
    { path: 'estoque', component: Estoque},
    { path: 'gastos', component: Gastos},
    { path: 'relatorio-financeiro', component: RelatorioFinanceiro},
    { path: 'vender', component: Vender},
];
