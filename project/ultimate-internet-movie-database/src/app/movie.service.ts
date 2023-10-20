// movies.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl = 'assets/movies.json'; // URL to the JSON file in the assets folder

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieResponse[]> {
    return this.http.get<MovieResponse[]>(this.moviesUrl);
  }
}
