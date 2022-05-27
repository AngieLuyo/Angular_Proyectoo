import { Component } from '@angular/core';
import { ClienteService } from './servicio/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AprendoAngular';
  public clientes: Array<any> = []

  constructor (
    private clienteService: ClienteService
  ){
    this.clienteService.getClientes().subscribe((resp : any) => {
      console.log(resp)
      this.clientes = resp
      
    })
  }
}
