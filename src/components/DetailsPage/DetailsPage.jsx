import { apiDetails } from '../fetch';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';

const DetailsPage = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  
  useEffect(() => {
    fetchDetails(movieId);
  }, [movieId]);

  const fetchDetails = async id => {
    try {
      const apiMoviesDetails = await apiDetails(id);
      setDetails(apiMoviesDetails);
    } catch (e) {
      setError(true);
    }
  };
  
  return (
    <>
      {error && <p>Sorry ( please try again</p>}
      {Object.keys(details).length !== 0 && (
        <main>
          <MovieDetails data={details} />
          <AdditionalInfo />
        </main>
      )}
    </>
  );
};

export default DetailsPage;