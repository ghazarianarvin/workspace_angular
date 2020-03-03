import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {DogBreed} from './DogBreed';
import {catchError, map, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DogApiService {

    private url = 'https://dog.ceo/api/breeds/list/all';

    constructor(private http: HttpClient) {
    }

    getDogBreeds() {
        return this.http.get<DogBreed[]>(this.url).pipe(
            map(this.mapToDogBreed),
            retry(1),
            catchError(err => throwError(err))
        );
    }

    private mapToDogBreed(data) {
        console.log(data);
        const result: DogBreed[] = [];
        Object.keys(data.message).forEach(key => {
            if (data.message[key].length > 0) {
                console.log('sub breed found');
                data.message[key].forEach(subBreed => result.push(new DogBreed(subBreed)));
            } else {
                result.push(new DogBreed(key));
            }
        });
        console.log(result.length);
        return result;
    }

}
