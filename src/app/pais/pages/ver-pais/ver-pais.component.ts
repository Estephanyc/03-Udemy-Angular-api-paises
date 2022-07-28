import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap} from 'rxjs/operators'
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe (
      switchMap(({id}) => this.paisService.buscarAlpha(id))
    )
    .subscribe( (resp: any) => {
      this.pais = resp[0];
      console.log(this.pais)
    })

  }

}
