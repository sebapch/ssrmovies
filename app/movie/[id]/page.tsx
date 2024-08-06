import { Suspense } from 'react';
import { getMovieDetails } from '@/lib/api';
/* import SimilarMovies from '../components/SimilarMovies'; */

export default async function MovieDetails({ params }: { params: { id: string } }) {
  const movie = await getMovieDetails(params.id);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">{movie.title}</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0 md:mr-4"
        />
        <div>
          <p className="text-lg mb-2">Release Date: {movie.release_date}</p>
          <p className="text-lg mb-2">Rating: {movie.vote_average}</p>
          <p className="text-lg mb-4">{movie.overview}</p>
          <h2 className="text-2xl font-semibold mb-2">Similar Movies</h2>
          <Suspense fallback={<p>Loading similar movies...</p>}>
           {/*  <SimilarMovies movieId={params.id} /> */}
          </Suspense>
        </div>
      </div>
    </div>
  );
}