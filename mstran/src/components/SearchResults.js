import MovieCard from './MovieCard'

export default function SearchResults({movies}) {
  return (
    <>
      <section className="poster-view">
        {movies?.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.Title}
            year={movie.Year}
            genre={movie.Genre}
            director={movie.Director}
            actors={movie.Actors}
            awards={movie.Awards}
            poster={movie.Poster}
          />
        ))} 
      </section> 
    </>
  );
}