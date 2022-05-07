import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const moviesElements = props.movies.map((movie) => {
    return (
      <li key={movie.id} className="main__section1--movie">
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <section className="main__section1">
      <ul className="main__section1--movies">{moviesElements}</ul>
    </section>
  );
}
export default MovieSceneList;
