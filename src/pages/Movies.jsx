import React, { useState, useEffect } from "react";


const TMDbAPIKey = "1c116d88ee17514fbffa09b947d67e7e"; // Reemplaza "TU_CLAVE_DE_API" con tu clave de API

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL de la API de TMDb para obtener películas populares
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDbAPIKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      <h1>Películas Populares</h1>
      {error ? (
        <p>Ocurrió un error al cargar los datos.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


  