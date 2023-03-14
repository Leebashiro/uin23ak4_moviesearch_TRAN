export default function MovieCard({title, year, genre, director, actors, awards, poster}) {
  return (
    <article className="movie-card">
      <img src={poster === "N/A" ? 'https://via.placeholder.com/300x200' : poster} alt={title} />
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <p>Director: {director}</p>
      <p>Actors: {actors}</p>
      <p>Awards: {awards}</p>
    </article>
  );
}