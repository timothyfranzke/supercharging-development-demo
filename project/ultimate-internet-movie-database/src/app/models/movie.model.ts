export interface Movie {
    id: number;
    name: string;
    description: string;
    releaseYear: number;
    director: string;
    image?: string;
}

export interface MovieResponse {
    id: string; 
    title: string; 
    year: number; 
    synopsis: string; 
    poster: string;
}