import MovieCard from './MovieCard'

export default function SearchResults({movies}) {
  return (
    <>
      <section className="poster-view">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.Title}
            year={movie.Year}
            genre={movie.genre}
            director={movie.director}
            actors={movie.actors}
            awards={movie.awards}
            poster={movie.Poster}
          />
        ))}
      </section>
    </>
  );
}