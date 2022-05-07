import { Link } from 'react-router-dom';


function MovieSceneDetail(props) {
  return (
    <>
      <section className="main__section2">
        <img
          className="main__section2--img"
          alt={props.movie.movie}
          src={props.movie.poster}
        />
        <div className="main__section2--details">
          <h2>{props.movie.title}</h2>
          <p>"{props.movie.full_line}"</p>
          <p>{props.movie.director}</p>
          <a
            className="main__section2--audio"
            href={props.movie.audio}
            target="_blank"
          >
            LISTEN
          </a>
        </div>
      </section>
      <Link to="/" className="main__section2--back">
        Back
      </Link>
    </>
  );
}
    
export default MovieSceneDetail;