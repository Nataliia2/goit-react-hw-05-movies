import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.ul`
  padding-left: 80px;
`;

export const Item = styled.li`
  margin-bottom: 5px;
`;

export const LinkStyle = styled(Link)`
  font-size: 20px;
  border-bottom: 1px solid black;
  :hover {
    color: #0a0a85;
    font-size: 25px;
    text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
      1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
      4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
      4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
      7px 6px 1px #cccccc, 2px 2px 2px rgba(44, 23, 206, 0);
  }
`;