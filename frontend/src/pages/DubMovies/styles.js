import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-right: 2rem;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
  a:hover {
    opacity: 0.4;
    transition: opacity 0.2s ease-out;
  }
`;