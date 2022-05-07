import { Link } from 'react-router-dom';


function MovieSceneDetail(props) {
  console.log(props)
  return (
    <>
      <section className="movie__details2">
        <img width="100" height="100"
          className="movie__details2--img"
          alt={props.user.movie}
          src={props.user.poster}
        />
        <div className="movie__details2--others">
          <h2>{props.user.title}</h2>
          <p>"{props.user.full_line}"</p>
          <p>{props.user.director}</p>
          <a
            className="movie__details2--audio"
            href={props.audio}
            target="_blank"
          >
            LISTEN
          </a>
        </div>
      </section>
      <Link to="/" className="movie__details2--back">
        BACK
      </Link>
    </>
  );
}
    
export default MovieSceneDetail;