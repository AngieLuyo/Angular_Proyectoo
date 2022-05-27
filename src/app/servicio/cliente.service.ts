import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
_url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  constructor(
    private http: HttpClient
    ) { 

      console.log('Servicio cliente')
  }

  getClientes(){
    let header = new HttpHeaders()
    .set('Type.content','aplication/json')
  
  return this.http.get(this._url, {
   headers: header 
    });
  } 
}
