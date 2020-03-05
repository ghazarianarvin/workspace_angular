import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DogBreed} from '../shared/DogBreed';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss'],
})
export class DogDetailComponent implements OnInit {

  selectedBreed: DogBreed;

  ngOnInit() {

  }
}
