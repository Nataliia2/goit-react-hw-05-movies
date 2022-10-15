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
    
  }
`;