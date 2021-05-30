import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-imc',
  templateUrl: './tabela-imc.component.html',
  styleUrls: ['./tabela-imc.component.scss']
})
export class TabelaImcComponent implements OnInit {

  @Input() cadastros: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
