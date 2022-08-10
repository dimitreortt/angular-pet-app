import { Injectable } from '@angular/core';
import { DummyData } from '../dummy-data';
import { PetInterface } from '../pet-interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private url = 'https://62f309f0a84d8c96811cc0d5.mockapi.io/pets';

  constructor(private http: HttpClient) {}

  getPets(): Observable<PetInterface[]> {
    // const pets = of(DummyData);
    // return pets;

    return this.http.get<PetInterface[]>(this.url);
  }
}
