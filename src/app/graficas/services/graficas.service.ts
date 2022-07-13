import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica')
  }

  getUsuariosData(){
    return this.getUsuariosRedesSociales().pipe(
    delay(2000),
    map(data => {
      const labels = Object.keys(data)
      const values = Object.values(data)
      return {
        labels: labels,
        values: values
      }
    })
    )
    
  }
}
