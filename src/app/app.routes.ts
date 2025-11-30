import { Consulta } from './consulta/consulta';
import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
  { path: 'cadastro', component: Cadastro },
  { path: 'consulta', component: Consulta },
];
