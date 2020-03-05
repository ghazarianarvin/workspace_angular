import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {DogBreed} from './DogBreed';
import {catchError, map, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DogApiService {

    private breedUrl = 'https://dog.ceo/api/breeds/list/all';
    private imgUrlPrefix = 'https://dog.ceo/api/breed/';
    private imgUrlPostfix = '/images/random';

    constructor(private http: HttpClient) {
    }

    getDogBreeds() {
        return this.http.get<DogBreed[]>(this.breedUrl).pipe(
            map(this.mapToDogBreed),
            retry(1),
            catchError(err => throwError(err))
        );
    }

    getBreedImageUrl(breed: string) {
        return this.http.get<string>(this.imgUrlPrefix + breed + this.imgUrlPostfix).pipe(
            map(this.mapToUrl),
            retry(1),
            catchError(err => throwError(err))
        );
    }

    private mapToUrl(data) {
        return data.message;
    }

    private mapToDogBreed(data) {
        const result: DogBreed[] = [];
        Object.keys(data.message).forEach(key => {
            if (data.message[key].length > 0) {
                console.log('sub breed found');
                data.message[key].forEach(subBreed => result.push(new DogBreed(subBreed)));
            } else {
                result.push(new DogBreed(key));
            }
        });
        return result;
    }


}
