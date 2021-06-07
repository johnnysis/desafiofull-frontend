import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { DividaEntradaComponent } from '../dividaentrada/dividaentrada.component';

@Component({
  selector: 'app-dividaexibicao',
  templateUrl: './dividaexibicao.component.html',
  styleUrls: [
    './dividaexibicao.component.css'
  ]
})
export class DividaExibicaoComponent implements OnInit {
  retornoDivida = null;
  
  @ViewChild(DividaEntradaComponent) dividaEntrada;
  constructor() { }

  ngOnInit(): void {
      this.retornoDivida = this.dividaEntrada.retornoDivida;
      alert(this.retornoDivida);
  }

}
