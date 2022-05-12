import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  users: Array<{id: number; nome: string; login: string; senha: string; email: string; img: string; icon: string}>;
  constructor() {
  this.users = [
    {id: 1002, nome: 'Pedro Bernardes', login:'pedrobe', senha:'123', email: 'pedrobe@teste.com', img: '../assets/mhp.png', icon: 'start'},
    {id: 1003, nome: 'Maria José', login:'mmjose', senha:'123', email: 'mariaj@teste.com', img: '../assets/dani.png', icon: 'start'}
    ]
   }
}

