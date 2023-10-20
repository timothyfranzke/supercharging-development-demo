import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movie.service';
import { Movie, MovieResponse } from '../models/movie.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies: Movie[] = []; // Initializing movies as an empty array

  constructor(private moviesService: MoviesService) { } // Injecting the MoviesService

  ngOnInit(): void {
    this.fetchMovies(); // Calling fetchMovies on component initialization
  }

  fetchMovies(): void {
    // map the MovieResponse to the Movie model
    this.moviesService.getMovies()
    .pipe(
      map((movies: MovieResponse[]) => {
        return movies.map((movie: MovieResponse) => {
          return this.mapMovieResponseToMovie(movie);
        });
      }
    ))
    .subscribe((movies: Movie[]) => {
      this.movies = movies; // Assigning the movies to the class property
    });
  }

  howOldIsThisMovie(releaseYear: number): number {
    return new Date().getFullYear() - releaseYear;
  }

  mapMovieResponseToMovie(movieResponse: MovieResponse): Movie {
    return {
      id: parseInt(movieResponse.id),
      name: movieResponse.title,
      description: movieResponse.synopsis,
      releaseYear: movieResponse.year,
      image: movieResponse.poster
    } as Movie;
  }
}
