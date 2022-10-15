import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 40px;
  margin-bottom: 20px;
`;

export const LinkStyle = styled(Link)`
  font-size: 20px;
  border-bottom: 1px solid black;
  :hover {
    color: #0a0a85;
    font-size: 25px;
  }
  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const SubTitle = styled.h2`
  margin-bottom: 20px;
`;