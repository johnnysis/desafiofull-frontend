import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/util/constants';

@Component({
  selector: 'app-dividaentrada',
  templateUrl: 'dividaentrada.component.html',
  styleUrls: ['dividaentrada.component.css']
})

export class DividaEntradaComponent implements OnInit {
  retornoDivida = null;
  divida = {};
  parcelas = [];
  parcelaSelecionada = -1;
  constructor(private http: HttpClient) {}

  onClickConfirm(data): void {
    let postData = {
      numeroDoTitulo: parseInt(data.numeroDoTitulo),
      devedor: {
        nome: data.nomeDevedor,
        cpf: data.cpfDevedor
      },
      percentualMulta: data.percentualMulta,
      percentualJuros: data.percentualJuros,
      parcelas: this.parcelas,
    };


    alert(JSON.stringify(postData));
    this.http.post<any>(url + "calculo", postData)
      .subscribe({
        next: data => {
          this.retornoDivida = data;
          console.log(this.retornoDivida);
        },
        error: error => {
          console.error('Falha na comunicação com o servidor: ', error);
        }
      });
  }

  onClickAdd(data): void {
    alert(this.parcelas.findIndex(el => el.numeroDaParcela == data.numeroDaParcela));
    if(this.parcelas.findIndex(el => el.numeroDaParcela == data.numeroDaParcela) == -1) {
      this.parcelas.push({
        numeroDaParcela: data.numeroDaParcela,
        dataDeVencimento: data.dataDeVencimento,
        valorDaParcela: data.valorDaParcela
      });
    }
    else
      alert("Não é possível adicionar parcelas com o mesmo número");
  }

  onClickRemove(data): void {
    //Não implementado

    // var index = this.parcelas.findIndex(el => el.numeroDaParcela == data.numeroDaParcela);
    // if (index > 0)
    //   this.parcelas.slice(index, 1);
  }

  ngOnInit(): void {
  }
}