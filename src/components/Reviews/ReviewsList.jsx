import PropTypes from 'prop-types';
import { Wrapper, SubTitle, Item, Info } from './ReviewsStyle';

export const ReviewsList = ({ data }) => {
  const result = data.map(({ id, author, content }) => {
    return (
      <Item key={id}>
        <SubTitle>Author: {author}</SubTitle>
        <p>{content}</p>
      </Item>
    );
  });
  return (
    <>
      {data.length !== 0 ? (
        <Wrapper>{result}</Wrapper>
      ) : (
        <Info>No reviews on this movie</Info>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  result: PropTypes.objectOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};