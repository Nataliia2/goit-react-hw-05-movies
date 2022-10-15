import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  height: 30px;
  padding-left: 80px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
`;

export const Button = styled.button`
  color: #5e5a5a;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  :hover,
  :focus {
    color: #0a0a85;
    
  }
`;