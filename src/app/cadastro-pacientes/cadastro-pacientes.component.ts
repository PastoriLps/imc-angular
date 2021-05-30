import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.component.html',
  styleUrls: ['./cadastro-pacientes.component.scss']
})
export class CadastroPacientesComponent implements OnInit {

  @Output() aoCadastrar = new EventEmitter<any>();

  nome: string;
  altura: number;
  peso: number;
  imc: number;

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    console.log('realizado novo cadastro!');
    const cadastro = {nome: this.nome, altura: this.altura, peso: this.peso, imc: this.imc};
    this.aoCadastrar.emit(cadastro);
    console.log(this.imc);
  }

  calculaImc() {
    this.imc = this.peso /(this.altura * this.altura)
    this.imc.toString;
  }
}
