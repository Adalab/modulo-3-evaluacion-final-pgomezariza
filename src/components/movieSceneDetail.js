import { Link } from 'react-router-dom';


function MovieSceneDetail(props) {
  return (
    <>
      <section className="main__section2">
        <img width="100" height="100"
          className="main__section2--img"
          alt={props.movie}
          src={props.poster}
        />
        <div className="main__section2--details">
          <h2>{props.title}</h2>
          <p>"{props.full_line}"</p>
          <p>{props.director}</p>
          <a
            className="main__section2--audio"
            href={props.audio}
            target="_blank"
          >
            LISTEN
          </a>
        </div>
      </section>
      <Link to="/" className="main__section2--back">
        BACK
      </Link>
    </>
  );
}
    
export default MovieSceneDetail;