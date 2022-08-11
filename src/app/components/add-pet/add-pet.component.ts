import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PetInterface } from 'src/app/pet-interface';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent implements OnInit {
  breed: string;
  url: string;
  description: string;
  favorite: boolean = false;

  @Output()
  onAddPet = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const newPet = {
      breed: this.breed,
      url: this.url,
      description: this.description,
      favorite: this.favorite,
    };

    this.onAddPet.emit(newPet);

    this.breed = '';
    this.description = '';
    this.url = '';
  }
}
