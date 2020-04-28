import {Component, OnInit} from '@angular/core';
import { Texto } from '../dadosTxt';
@Component({
  selector: 'app-teste',
  templateUrl: './component-test.html'
})

export class TesteComponent implements OnInit{

  

  texto: Texto= {
    texto: 'Eu vou aprender Angular'

};

constructor(){}

  ngOnInit(){}

}