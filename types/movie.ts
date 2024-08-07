
export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    genres: Genre[];
    overview: string;
    runtime: number;
    budget: number;
    revenue: number;
    original_language: string;
    poster_path: string;
  }