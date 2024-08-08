import { Movie } from "../types/movie";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../app/api/auth/[...nextauth]/options";

interface MovieListProps {
  movies: Movie[];
}

export default async function MovieList({ movies }: MovieListProps) {
  const session = await getServerSession(options);

  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  console.log(session)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 text-black">
      {movies.map((movie) => (
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <span>{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
            {session && (
              <label className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-gray-400'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </label>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
