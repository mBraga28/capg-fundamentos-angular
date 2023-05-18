import { Component } from '@angular/core';
import { Celular } from '../types/Celulares';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id:1, nome:"Celular XL", descricao:"Um celular grande", esgotado:false},
    {id:1, nome:"Celular Normal", esgotado:false},
    {id:1, nome:"Celular Mini", descricao:"Um celular pequeno", esgotado:true}
  ]
}
