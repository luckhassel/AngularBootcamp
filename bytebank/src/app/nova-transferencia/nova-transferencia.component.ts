import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  constructor(private service: TransferenciaService, private route: Router){

  }

  valor:number = 0;
  destino:string = '0';
  transferencia: any;

  transferir(): any{
    this.service.adicionar({valor: this.valor, destino: this.destino}).subscribe(
      resultado => {
        console.log(resultado),
       this.limparCampos(),
       this.route.navigateByUrl('extrato')
      },
      error => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = '0';
  }
}
