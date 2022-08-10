import { Injectable } from '@angular/core';
import { DummyData } from '../dummy-data';
import { PetInterface } from '../pet-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor() {}

  getPets(): Observable<PetInterface[]> {
    const pets = of(DummyData);
    return pets;
  }
}
