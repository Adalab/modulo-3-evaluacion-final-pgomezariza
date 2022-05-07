import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const moviesElements = props.movies.map((movie) => {
    return (
      <li key={movie.id} className="movies">
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <section className="movie__details1">
      <ul className="movie__details1--all">{moviesElements}</ul>
    </section>
  );
}
export default MovieSceneList;
