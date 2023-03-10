export default function MovieCard({ title, year, genre, director, actors, awards, poster}) {
  return (
    <article className="movie-card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <p>Director: {director}</p>
      <p>Actors: {actors}</p>
      <p>Awards: {awards}</p>
    </article>
  );
}