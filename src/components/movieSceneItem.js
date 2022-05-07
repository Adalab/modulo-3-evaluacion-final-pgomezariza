import { Link } from 'react-router-dom';
import '../styles/MovieSceneItem.scss';

function MovieSceneItem(props) {
  return (
    <>
      <img width="100" height="100" 
        className="main__section1--movieImage"
        alt={props.movie.movie}
        src={props.movie.poster}
      />
      <h2 className="main__section1--movieTitle">
        {props.movie.title} - {props.movie.year}
      </h2>
      <p className="main__section1--movieQuote">"{props.movie.full_line}"</p>
      <Link to={`/movie/${props.movie.id}`}
        className="main__section1--movieDetails">
        Detailss
      </Link>
    </>
  );
}
export default MovieSceneItem;