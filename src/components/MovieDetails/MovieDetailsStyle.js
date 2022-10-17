import styled from 'styled-components';


export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  border: transparent;
  background-color: transparent;
  padding-left: 40px;
  margin-bottom: 20px;
  cursor: pointer;
  :hover,
  :focus {
    color: #0a0a85;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Img = styled.img`
  margin-right: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin-bottom: 20px;
`;

export const Genre = styled.span`
  :not(:last-child) {
    margin-right: 10px;
  }
`;