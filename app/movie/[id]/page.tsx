import { Suspense } from 'react';
import { getMovieDetails } from '../../../lib/tmdb';
import { Movie } from '../../../types/movie';
import SimilarMovies from '@/components/SimilarMovies';

export default async function MovieDetails({ params }: { params: { id: string } }) {
  const movie: Movie | null = await getMovieDetails(params.id);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0 md:mr-8 rounded-lg shadow-lg"
        />
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-xl mb-2">
            <span className="font-semibold">Release Date:</span> {new Date(movie.release_date).toLocaleDateString()}
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold">Rating:</span> {movie.vote_average.toFixed(1)} / 10
          </p>
          <p className="text-xl mb-4">
            <span className="font-semibold">Genres:</span> {movie.genres.map(genre => genre.name).join(', ')}
          </p>
          <h2 className="text-2xl font-semibold mb-2">Synopsis</h2>
          <p className="text-lg mb-6">{movie.overview}</p>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
            <p className="text-lg mb-1"><span className="font-semibold">Runtime:</span> {movie.runtime} minutes</p>
            <p className="text-lg mb-1"><span className="font-semibold">Budget:</span> ${movie.budget.toLocaleString()}</p>
            <p className="text-lg mb-1"><span className="font-semibold">Revenue:</span> ${movie.revenue.toLocaleString()}</p>
            <p className="text-lg mb-1"><span className="font-semibold">Original Language:</span> {movie.original_language.toUpperCase()}</p>
          </div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Similar Movies</h2>
          <Suspense fallback={<p>Loading similar movies...</p>}>
            <SimilarMovies movieId={params.id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}