import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { DividaEntradaComponent } from './dividaentrada/dividaentrada.component';
import { DividaExibicaoComponent } from './dividaexibicao/dividaexibicao.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    DividaEntradaComponent,
    DividaExibicaoComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatDividerModule
  ],
  exports: [
    DividaEntradaComponent
  ]
})
export class PagesModule { }
