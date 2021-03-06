//https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50
//1. Petición a la Api con un Fetch. Recibimos la respuesta y la convertimos en JSON porque lo que me da la API es un string. Limpio los datos para quedarme con lo que me piden, mediante un map. Y dataClean será mi array de pelis. 

const getApiData = () => {
  return fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
    .then ((response) => response.json())
    .then ((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          id: index,
          poster: movie.poster,
          title: movie.movie,
          full_line: movie.full_line,
          year: movie.year,
          director: movie.director,
          audio: movie.audio,
        };
      });
      return dataClean; 
    });
};

export default getApiData; 