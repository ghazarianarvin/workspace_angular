import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {DogBreed} from './shared/DogBreed';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  private url: 'https://dog.ceo/api/breeds/list/all';

  constructor(private http: HttpClient) { }

  getDogBreeds(id: any): Observable<DogBreed> {
    return this.http.get<DogBreed>(this.url).pipe(
        retry(1), catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }

}
