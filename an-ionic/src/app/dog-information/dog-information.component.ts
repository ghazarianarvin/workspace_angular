import { Component, OnInit } from '@angular/core';
import {DogApiService} from './shared/dog-api.service';
import {DogBreed} from './shared/DogBreed';

@Component({
  selector: 'app-dog-information',
  templateUrl: './dog-information.component.html',
  styleUrls: ['./dog-information.component.scss'],
})
export class DogInformationComponent implements OnInit {

  dogBreeds: DogBreed[];

  constructor(private dogApi: DogApiService) { }

  ngOnInit() {
    this.getAllBreeds();
  }

  getAllBreeds() {
    this.dogApi.getDogBreeds().subscribe(res => {
      this.dogBreeds = res;
    });
  }
}
