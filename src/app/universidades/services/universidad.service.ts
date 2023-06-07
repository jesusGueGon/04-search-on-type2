import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universidad } from '../interfaces/universidad';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  private baseUrl: string = 'http://universities.hipolabs.com/search';

  public data: Universidad[] = [];

  constructor(private httpClient: HttpClient) { }

  searchByCountry(country: string): Observable<Universidad[]> {

    const url = `${this.baseUrl}?country=${country}`;

    return this.httpClient.get<Universidad[]>(url);

  }





}
