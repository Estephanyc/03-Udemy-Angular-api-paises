import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  termino: string = 'Hola mundo';
  error: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.termino = termino;
    this.error = false;

    this.paisService.buscarRegion(termino)
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
