import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
// import { DividaEntradaComponent } from './pages/dividaentrada/dividaentrada.component';
// import { DividaExibicaoComponent } from './pages/dividaexibicao/dividaexibicao.component';

@NgModule({
  declarations: [
    AppComponent,
    // DividaentradaComponent,
    // DividaexibicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
