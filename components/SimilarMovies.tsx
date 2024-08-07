import { getSimilarMovies } from '../lib/tmdb';
import { Movie } from '../types/movie';
import Link from 'next/link';

interface SimilarMoviesProps {
  movieId: string;
}

export default async function SimilarMovies({ movieId }: SimilarMoviesProps) {
  const similarMovies: Movie[] = await getSimilarMovies(movieId);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black">
      {similarMovies.slice(0, 4).map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
              <p className="text-sm text-gray-600">
                {new Date(movie.release_date).getFullYear()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}