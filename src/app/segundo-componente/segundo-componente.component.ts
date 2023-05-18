import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Marco";
  dataNascimento = "1995-01-01";
  urlImage = "/assets/joao.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento é: ${this.dataNascimento}`);
  };
}
