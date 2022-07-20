import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = 'Hola mundo';
  error: boolean = false;
  paises: Country[] = [];
  
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.termino = termino;
    this.error = false;

    this.paisService.buscarCapital(termino)
    .subscribe( (paises: Country[]) => {
      this.paises = paises;
      console.log(paises)
    },
    (err) => {
      this.error = true;
      this.paises = [];
    })
  }

}
