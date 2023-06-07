import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UniversidadesModule } from './universidades/universidades.module';
import { UniversidadesComponent } from './universidades/pages/universidades/universidades.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UniversidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
