import { Component, OnInit } from '@angular/core';
import { DummyData } from 'src/app/dummy-data';
import { PetInterface } from 'src/app/pet-interface';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: PetInterface[] = DummyData;

  constructor() {}

  ngOnInit(): void {}
}
