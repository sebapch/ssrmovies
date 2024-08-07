
import { Movie } from '../types/movie';
import Link from 'next/link';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black">
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{movie.title}</h2>
              <p className="text-gray-700 text-base">
                {new Date(movie.release_date).getFullYear()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}