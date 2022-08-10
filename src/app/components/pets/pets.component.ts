import { Component, OnInit } from '@angular/core';
// import { DummyData } from 'src/app/dummy-data';
import { PetInterface } from 'src/app/pet-interface';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: PetInterface[] = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getPets().subscribe((pets) => (this.pets = pets));
  }

  addFavorite(pet: PetInterface) {
    pet.favorite = !pet.favorite;
    this.petService.updatePetFavorite(pet).subscribe();
  }

  deletePet(pet: PetInterface) {
    console.log(pet);
    this.petService.deletePet(pet).subscribe();
  }
}
