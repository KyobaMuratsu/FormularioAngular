import { Routes } from '@angular/router';
import { PaginaCadastroComponent } from './pagina-cadastro/pagina-cadastro.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

export const routes: Routes = [
    {
        path: '',
        component: TelaInicialComponent
    },

    {
        path: 'cadastro',
        component: PaginaCadastroComponent
    }
];
