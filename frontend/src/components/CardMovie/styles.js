import styled from 'styled-components'; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 1rem 1rem 0 0;
`;

export const CoverPicture = styled.img`
  max-height: 300px;
  margin-bottom: 10px;
`;

export const MovieTitle = styled.h2`
  color: #f1f1f1;
  text-transform: capitalize;
  `;

export const MovieGender = styled.h3`
  color: #f1f1f1;
  text-transform: capitalize;
`;


export const MovieLanguage = styled.h4`
  color: #cc2222;
  margin-top: 5px;
  text-transform: capitalize;
`;
