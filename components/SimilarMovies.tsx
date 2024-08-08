import { getSimilarMovies } from '../lib/tmdb';
import { Movie } from '../types/movie';
import Link from 'next/link';

interface SimilarMoviesProps {
  movieId: string;
}

export default async function SimilarMovies({ movieId }: SimilarMoviesProps) {
  const similarMovies: Movie[] = await getSimilarMovies(movieId);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 text-black">
      {similarMovies.slice(0, 4).map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id} className="block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver detalles
                </p>
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2 truncate">{movie.title}</h2>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {/* ... */}
                  </svg>
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {/* ... */}
                  </svg>
                  <span>{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
