import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string [] = ['africa', 'america', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
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
    },
    (err) => {
      this.error = true;
      this.paises = [];
    })
  }

  activarRegion(region: string) {

    if(region == this.regionActiva)  return
    this.paises = [];
    this.regionActiva = region;
    this.paisService.buscarRegion(region).subscribe(result => {
      console.log(result)
      this.paises = result;
    })
  }

  getClaseCss(region: string) {
    return region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
