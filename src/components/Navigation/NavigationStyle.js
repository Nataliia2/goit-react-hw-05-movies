import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  padding: 20px;
  padding-left: 80px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const Item = styled.nav`
  font-size: 20px;
  :not(:last-child) {
    margin-right: 40px;
  }
  :hover {
    color: red;
  }
`;