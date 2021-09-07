import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1 = '';
  num2 = '';
  operador = '';
  // Booleano para controlar si se ha clicado un operador o no
  operacion = false;
  resultado = 0;

  clickNumero(n: string){
    if(!this.operacion){
      this.num1 = this.num1 + n;
    } else{
      this.num2 = this.num2 + n;
    }
  }

  borrar(){
    if(!this.operacion){
      this.num1 = this.num1.slice(0, -1);
    } else{
      this.num2 = this.num2.slice(0, -1);
    }
  }

  operar(op: string){
    this.operacion = true;
    this.operador = op;
  }

  igual(){
    switch(this.operador){
      case '+':
        this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
      break;
      case '-':
        this.resultado = parseFloat(this.num1) - parseFloat(this.num2);
      break;
      case '*':
        this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
      break;
      case '/':
        this.resultado = parseFloat(this.num1) / parseFloat(this.num2);
      break;
    }
    this.num1 = '';
    this.num2 = '';
    this.operador = '';
    this.operacion = false;
  }
}


