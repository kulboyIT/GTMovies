import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MovieHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f1f1f1;
  margin-bottom: 2rem;
  text-transform: capitalize;
`;

export const MovieActions = styled.div`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 30px; 
    cursor: pointer;
  }
`;

export const EmbedContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

