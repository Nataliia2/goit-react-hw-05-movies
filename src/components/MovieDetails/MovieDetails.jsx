import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  Wrapper,
  LinkToBack,
  Img,
  Title,
  SubTitle,
  Text,
  Genre,
} from './MovieDetailsStyle';
import { HiChevronDoubleLeft } from 'react-icons/hi';

const imageUrl = 'https://image.tmdb.org/t/p/w300';

export const MovieDetails = ({ data }) => {
  const {
    title,
    release_date,
    poster_path,
    overview,
    genres,
    vote_average,
  } = data;
  
  const year = new Date(release_date);
  const location = useLocation();

  let backLink = location.state?.from ?? '/movies' ;
  
  const genre = genres.map(({ id, name }) => {
    return <Genre key={id}>{name}</Genre>;
  });

  return (
    <>
      <LinkToBack to={backLink}>
        <HiChevronDoubleLeft />
        Go back
      </LinkToBack>
      <Wrapper>
        <Img src={`${imageUrl}${poster_path}`} alt={title} />
        <div>
          <Title>
            {title} ({year.getFullYear()})
          </Title>
          <Text>User Score: {Math.round(vote_average * 10)}%</Text>
          <SubTitle>Overview</SubTitle>
          <Text>{overview}</Text>
          <SubTitle>Genres</SubTitle>
          {genre}
        </div>
      </Wrapper>
    </>
  );

};

MovieDetails.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    vote_average: PropTypes.number.isRequired,
  }),
};