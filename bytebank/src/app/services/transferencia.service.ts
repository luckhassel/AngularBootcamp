import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private http: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencia(){
    return this.listaTransferencia;
  }

  todas(): any{
    return this.http.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any): any{
    this.hidratar(transferencia);
    //this.listaTransferencia.push(transferencia);
    return this.http.post(this.url, transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
