import React, { Suspense } from 'react';
import { getMovieDetails } from '../../../lib/tmdb';
import { Movie } from '../../../types/movie';
import SimilarMovies from '@/components/SimilarMovies';

export default async function MovieDetails({ params }: { params: { id: string } }) {
  const movie: Movie | null = await getMovieDetails(params.id);

  console.log('movie', movie);
  if (!movie) return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-3xl text-gray-600">Movie not found</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-12">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={`${movie.title} backdrop`}
            className="w-full h-96 object-cover rounded-xl opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-5xl font-bold mb-2 text-shadow-lg">{movie.title}</h1>
            <p className="text-xl mb-4 text-shadow-md">{movie.tagline}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 mb-6"
            />
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
              <InfoItem title="Release Date" value={new Date(movie.release_date).toLocaleDateString()} />
              <InfoItem title="Rating" value={`${movie.vote_average.toFixed(1)} / 10`} />
              <InfoItem title="Runtime" value={`${movie.runtime} minutes`} />
              <InfoItem title="Language" value={movie.original_language.toUpperCase()} />
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed">{movie.overview}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl mb-8">
              <h2 className="text-2xl font-semibold mb-4">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map(genre => (
                  <span key={genre.id} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            {movie.trailer && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.trailer.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                  ></iframe>
                </div>
              </div>
            )}

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Financial Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <InfoItem title="Budget" value={`$${movie.budget.toLocaleString()}`} />
                <InfoItem title="Revenue" value={`$${movie.revenue.toLocaleString()}`} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Similar Movies</h2>
          <Suspense fallback={<p className="text-xl text-gray-400">Loading similar movies...</p>}>
            <SimilarMovies movieId={params.id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ title, value }: { title: string, value: string }) {
  return (
    <div className="mb-4 last:mb-0">
      <h3 className="text-sm font-semibold text-gray-400">{title}</h3>
      <p className="text-lg">{value}</p>
    </div>
  );
}