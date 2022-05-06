import { useState, useEffect } from 'react';
import getApiData from '../services/moviesApi';
//import movieSceneList from './movieSceneList';
import Filters from './Filters';
//import movieSceneDetail from './movieSceneDetail';
import localStorage from '../services/localStorage';
import { Routes, Route } from 'react-router-dom';
import { useLocation, matchPath  } from 'react-router';
import '../styles/App.scss';


const App = () => {
  const [dataMovies, setDataMovies] = useState(localStorage.get('movies', []));
  const [filterMovie, setFilterMovie] = useState(localStorage.get('filterMovie', ''));
  const [filterYear, setFilterYear] = useState(localStorage.get('filterYear', ''));

  useEffect(() => {
    if (dataMovies.length === 0) {
      getApiData().then((dataClean) => {
        setDataMovies(dataClean);
      });
    }
  }, );

  useEffect(() => {
    localStorage.set('movies', dataMovies);
    localStorage.set('filterMovie', filterMovie);
    localStorage.set('filterYear', filterYear);
  }, [dataMovies, filterMovie, filterYear]);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const movieFilters = dataMovies
    .filter((item) => {
      return item.title.toLowerCase().includes(filterMovie.toLowerCase());
    })
    .filter((item) => {
      if (filterYear.length === 0) {
        return true;
      } else {
        return filterYear.includes(item.year);
      }
    });

  const getYear = () => {
    const movieYears = dataMovies.map((movie) => movie.year);
    const uniqueYear = movieYears.filter((year, index) => {
      return movieYears.indexOf(year) === index;
    });
    return uniqueYear;
  };
  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataMovies.find((movie) => movie.id === movieId);

  return (
    <>
      <h1 className="main__title">Owen Wilson WOW</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleFilterMovie={handleFilterMovie}
                filterMovie={filterMovie}
                handleFilterYear={handleFilterYear}
                years={getYear()}
              />
              <movieSceneList movies={movieFilters} />
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={<movieSceneDetail user={movieFound} />}
        />
      </Routes>
    </>
  );
};

export default App;
