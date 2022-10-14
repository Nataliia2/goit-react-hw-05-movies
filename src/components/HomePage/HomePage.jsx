import { fetchRequest } from '../fetch';
import { useState, useEffect } from 'react';
import { MovieItem } from '../MovieItem/MovieItem';
import { Error, Title } from './HomePageStyle';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTreding();
  }, []);
  const fetchTreding = async () => {
    try {
      const apiHomePage = await fetchRequest();
      return setMovies(apiHomePage);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <>
      {movies.length !== 0 && (
        <main>
          <Title>Tredding today</Title>
          <MovieItem items={movies} />
        </main>
      )}
      {error && <Error>Please try one more time</Error>}
    </>
  );
};

export default HomePage;