import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados/dados.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {
  users: any;
  login: string;
  senha: string;
  mensagem: string;

  constructor(dadosServ: DadosService) {
    this.users = dadosServ.users;
   }

  ngOnInit() {
  }

  async entrar(campoLogin, campoSenha){
    this.login = campoLogin;
    this.senha = campoSenha;
    if (this.login == this.users[0].login && this.senha == this.users[0].senha) {
      this.mensagem = 'Olá ' + this.users[0].nome + ', sua credencial está correta, seja bem vindo!';
      console.log(this.login);
    } else {
       this.mensagem = 'Credencial inválida!';
    }
  }
}
