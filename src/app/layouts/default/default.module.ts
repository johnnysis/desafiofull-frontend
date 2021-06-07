import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MatDividerModule } from '@angular/material/divider';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { DefaultComponent } from './default.component';

import { DividaEntradaComponent } from 'src/app/pages/dividaentrada/dividaentrada.component';
import { DividaExibicaoComponent } from 'src/app/pages/dividaexibicao/dividaexibicao.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { PagesModule } from 'src/app/pages/pages.module';

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatDividerModule,
    PagesModule
    // FlexLayoutModule
  ]
})
export class DefaultModule { }
