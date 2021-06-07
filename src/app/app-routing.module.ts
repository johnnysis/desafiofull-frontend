import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { DividaEntradaComponent } from 'src/app/pages/dividaentrada/dividaentrada.component';
import { DividaExibicaoComponent } from 'src/app/pages/dividaexibicao/dividaexibicao.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: DividaEntradaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
