import {Component, OnInit, ViewChild} from '@angular/core';
import {DogApiService} from './shared/dog-api.service';
import {DogBreed} from './shared/DogBreed';
import {DogDetailComponent} from './dog-detail/dog-detail.component';

@Component({
  selector: 'app-dog-information',
  templateUrl: './dog-information.component.html',
  styleUrls: ['./dog-information.component.scss'],
})
export class DogInformationComponent implements OnInit {

  @ViewChild(DogDetailComponent, {static: false})
  dogDetail: DogDetailComponent;

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

  dogBreedSelected(selectedBreed: DogBreed) {
    if (selectedBreed.imageUrl == null) {
      this.dogApi.getBreedImageUrl(selectedBreed.breed).subscribe(url => selectedBreed.imageUrl = url);
    }
    this.dogDetail.selectedBreed = selectedBreed;
  }
}
