import { Component, Input, Output } from '@angular/core';
import { UniversidadService } from '../../services/universidad.service';
import { Universidad } from '../../interfaces/universidad';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {

  arrUniversidades: Universidad[] = [];

  constructor(private universidadService: UniversidadService){}

  takeUniversities(pais: string) {

    this.universidadService.searchByCountry(pais).subscribe((data) => {
      this.arrUniversidades = [...data];
      console.log(this.arrUniversidades);
    })

  }


}
