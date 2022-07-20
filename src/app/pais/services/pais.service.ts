import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiurl: string = '  https://restcountries.com/v3.1';
  
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>
  {
    const url = `${this.apiurl}/name/${termino}`
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]>
  {
    const url = `${this.apiurl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino: string): Observable<Country[]>
  {
    const url = `${this.apiurl}/region/${termino}`
    return this.http.get<Country[]>(url);
  }

  buscarAlpha(id: string): Observable<Country>
  {
    const url = `${this.apiurl}/alpha/${id}`
    return this.http.get<Country>(url);
  }
}
