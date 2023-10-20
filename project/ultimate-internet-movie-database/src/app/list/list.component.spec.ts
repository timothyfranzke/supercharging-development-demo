import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListComponent } from './list.component';
import { MoviesService } from '../movie.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule, MatCardModule, MatButtonModule, MatToolbarModule], 
        providers: [MoviesService]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#howOldIsThisMovie should return the difference between the current year and the release year', () => {
    const currentYear = new Date().getFullYear();
    const releaseYear = currentYear - 5;
    expect(component.howOldIsThisMovie(releaseYear)).toEqual(5);
  });

  it('#mapMovieResponseToMovie should map a MovieResponse to a Movie', () => {
    const movieResponse = {
      id: '1',
      title: 'Test Movie',
      synopsis: 'Test Synopsis',
      year: 2020,
      poster: 'Test Poster'
    };
    const movie = component.mapMovieResponseToMovie(movieResponse);
    expect(movie.id).toEqual(parseInt(movieResponse.id));
    expect(movie.name).toEqual(movieResponse.title);
    expect(movie.description).toEqual(movieResponse.synopsis);
    expect(movie.releaseYear).toEqual(movieResponse.year);
    expect(movie.image).toEqual(movieResponse.poster);
  });
});
