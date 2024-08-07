# Movie Recommendation Application

## Overview

This is a modern, high-performance movie recommendation application built with Next.js, TypeScript, and Redux Toolkit. It leverages The Movie Database (TMDb) API to provide users with an engaging platform to discover and explore movies.

## Key Features

- **Server-Side Rendering (SSR)**: Utilizes Next.js for improved performance and SEO.
- **Search Functionality**: Allows users to search for movies by title, genre, or other criteria.
- **Movie Details**: Displays comprehensive information about selected movies.
- **Similar Movies**: Recommends movies based on the user's selections.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.
- **State Management**: Uses Redux Toolkit for efficient client-side state management.

## Technical Stack

- **Frontend Framework**: Next.js (App Router)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **API Calls**: Axios
- **API**: The Movie Database (TMDb)

## Architecture

The application follows a hybrid approach, combining server-side rendering with client-side state management:

1. **Server Components**: Handle initial data fetching and rendering.
2. **Client Components**: Manage dynamic updates and user interactions.
3. **Redux Store**: Centralizes state management for client-side operations.

## Key Components

- `app/page.tsx`: Home page with popular movies
- `app/search/page.tsx`: Search results page
- `app/movie/[id]/page.tsx`: Individual movie details page
- `lib/features/movieSlice.ts`: Redux slice for movie-related state
- `components/MovieListWrapper.tsx`: Client-side wrapper for movie lists
- `components/SearchResultsWrapper.tsx`: Client-side wrapper for search results
- `components/MovieDetailsWrapper.tsx`: Client-side wrapper for movie details

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env.local` file
   - Add your TMDb API key: `TMDB_API_KEY=your_api_key_here`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the application for production
- `npm start`: Runs the built application
- `npm run lint`: Runs the linter

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.