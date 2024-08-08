
export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genres: { id: number; name: string }[];
    overview: string;
    runtime: number;
    budget: number;
    revenue: number;
    original_language: string;
    trailer?: { key: string };
    backdrop_path?: { key: string };
    tagline?: string ;
  }
  