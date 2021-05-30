import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imc';
  cadastros: any[] = [];

  cadastrar($event){
    console.log($event);
    const cadastro = {...$event}
    this.cadastros.push(cadastro);
  }
}
