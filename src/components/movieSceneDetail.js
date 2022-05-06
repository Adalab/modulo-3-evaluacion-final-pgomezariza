function MovieSceneDetail(props) {
  return (
    <section>
      <img className="img" alt={props.movie.movie} src={props.movie.poster} />
      <h2>{props.movie.title}</h2>
      <p>"{props.movie.full_line}"</p>
      <p>{props.movie.director}</p>
      <p>{props.movie.audio}</p> 
    </section>
  );
}
export default MovieSceneDetail;