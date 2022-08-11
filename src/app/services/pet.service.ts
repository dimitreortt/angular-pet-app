import { Injectable } from '@angular/core';
import { DummyData } from '../dummy-data';
import { PetInterface } from '../pet-interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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

  updatePetFavorite(pet: PetInterface): Observable<PetInterface> {
    const updateUrl = `${this.url}/${pet.id}`;
    //@ts-ignore
    return this.http.put<PetInterface>(updateUrl, pet, httpOptions);
  }

  deletePet(pet: PetInterface): Observable<PetInterface> {
    const deleteUrl = `${this.url}/${pet.id}`;
    //@ts-ignore
    return this.http.delete<PetInterface>(deleteUrl, pet, httpOptions);
  }

  addPet(pet: PetInterface): Observable<PetInterface> {
    //@ts-ignore
    return this.http.post<PetInterface>(this.url, pet, httpOptions);
  }
}
