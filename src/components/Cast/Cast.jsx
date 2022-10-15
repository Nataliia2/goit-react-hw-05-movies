import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiCast } from '../fetch';
import { CastList } from './CastList';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const credits = 'credits';

  useEffect(() => {
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCast = async () => {
    try {
      const apiCastDetails = await apiCast(movieId, credits);
      setCast(apiCastDetails);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <>
      {error && <p>Sorry ( please try again</p>}
      {cast !== null && <CastList list={cast} />}
    </>
  );
};

export default Cast;
