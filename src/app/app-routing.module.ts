import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //vincula as rotas do componente
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule) //lazy Loading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
