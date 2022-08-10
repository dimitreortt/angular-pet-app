import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
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

  @Output()
  onAddFavorite: EventEmitter<PetInterface> = new EventEmitter();

  @Output()
  onDeletePet: EventEmitter<PetInterface> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFavorite() {
    console.log('Favorite');
    this.onAddFavorite.emit();
  }

  onDelete() {
    // console.log('delete', pet);
    this.onDeletePet.emit();
  }
}
