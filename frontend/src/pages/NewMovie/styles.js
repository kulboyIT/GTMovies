import styled from 'styled-components';

export const Container = styled.div`
  display:flex; 
  flex-direction: column;
  color: #cfcfcf;
  align-items: center;

  h1 {

    font-size: 2.5rem;
    text-transform: capitalize;
  }
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 50%;
`;

export const Input = styled.input`
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
  outline: 0;
  box-shadow: unset;
  border: none;
  background-color: #222;
  color: #cfcfcf;
  font-size: 16px;
  
  &::placeholder {
    color: #cfcfcf;
  }
  `;

export const Select = styled.select`
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px;
  outline: 0;
  box-shadow: unset;
  border: none;
  background-color: #222;
  color: #cfcfcf;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 20px;
  border-radius: 4px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  background: rgba(229, 9, 20, 0.6);
  color: #cfcfcf;

  &:hover {
    background: rgba(229, 9, 20, 1);
    transition: all 0.5s ease-in-out;

  }
`;