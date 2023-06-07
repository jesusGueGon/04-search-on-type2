import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversidadesRoutingModule } from './universidades-routing.module';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PaisesComponent } from './components/paises-table/paises.component';
import { UniversidadesComponent } from './pages/universidades/universidades.component';


@NgModule({
  declarations: [
    BuscadorComponent,
    PaisesComponent
  ],
  imports: [
    CommonModule,
    UniversidadesRoutingModule,
  ],
  exports: [
    BuscadorComponent,
    PaisesComponent
  ]
})
export class UniversidadesModule { }
