import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
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
      id: 1,
      title: 'Test Movie',
      synopsis: 'Test Synopsis',
      year: 2020,
      poster: 'Test Poster'
    };
    const movie = component.mapMovieResponseToMovie(movieResponse);
    expect(movie.id).toEqual(movieResponse.id);
    expect(movie.name).toEqual(movieResponse.title);
    expect(movie.description).toEqual(movieResponse.synopsis);
    expect(movie.releaseYear).toEqual(movieResponse.year);
    expect(movie.image).toEqual(movieResponse.poster);
  });
});
