import PropTypes from 'prop-types';
import { List, Img, Text } from './CastListStyle';

const imageUrl = 'https://image.tmdb.org/t/p/w200';
const noImage = 'https://s3.amazonaws.com/PARTS.Images/NoImage.jpg';

export const CastList = ({ list }) => {
  const items = list.map(({ id, name, character, profile_path }) => {
    return (
      <li key={id}>
        {profile_path !== null ? (
          <Img src={`${imageUrl}${profile_path}`} alt={name} />
        ) : (
          <Img src={noImage} width="300" height="400" alt={name} />
        )}
        <Text>{name}</Text>
        <Text>Character: {character} </Text>
      </li>
    );
  });
  return <List>{items}</List>;
};

CastList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  items: PropTypes.objectOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ),
};