import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getApiData from '../services/moviesApi';


function App() {
  const [dataMovies, setDataMovies] = useState ([]);

  useEffect(() => {
    getApiData().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, [])
  
};

export default App;
