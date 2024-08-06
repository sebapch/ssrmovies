import Image from 'next/image';
import Link from 'next/link';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Link href={`/movie/${movie.id}`}>
            <div className="relative h-64">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-600 mb-2">Original Title: {movie.original_title}</p>
            <p className="text-sm text-gray-500 mb-2">Release Date: {movie.release_date}</p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Rating:</span> {movie.vote_average.toFixed(1)}/10 ({movie.vote_count} votes)
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Popularity:</span> {movie.popularity.toFixed(2)}
            </p>
            <p className="text-sm mb-4">
              <span className="font-semibold">Original Language:</span> {movie.original_language.toUpperCase()}
            </p>
            <p className="text-sm text-gray-700 mb-4">{movie.overview}</p>
            <div className="flex flex-wrap gap-2">
              {movie.genre_ids.map((genreId) => (
                <span key={genreId} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                  {genreId}
                </span>
              ))}
            </div>
            {movie.adult && (
              <p className="mt-2 text-red-600 text-sm font-semibold">Adult Content</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}