import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiurl: string = 'https://restcountries.com/v3.1';
  private fields: string = 'name,capital,flags,population,cca2';

  get httpParams () {
    return new HttpParams().set('fields', this.fields)
  }
  
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>
  {
    const url = `${this.apiurl}/name/${termino}`
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }

  buscarCapital(termino: string): Observable<Country[]>
  {
    const url = `${this.apiurl}/capital/${termino}`
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }

  buscarRegion(termino: string): Observable<Country[]>
  {
    const url = `${this.apiurl}/region/${termino}`
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }

  buscarAlpha(id: string): Observable<Country>
  {
    const url = `${this.apiurl}/alpha/${id}`
    return this.http.get<Country>(url);
  }
}
