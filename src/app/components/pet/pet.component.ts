import { Component, Input, OnInit } from '@angular/core';
import { PetInterface } from 'src/app/pet-interface';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  title = 'Pet component title';

  @Input()
  pet: PetInterface;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('Favorite');
  }
}
