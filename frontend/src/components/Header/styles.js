import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin: 10px 0 50px 0;
  flex: 1;
`;

export const MenuContainer = styled.ul`
  display: flex;
  margin-left: 10rem;
  align-items: center;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin: 0 4rem;

  & a {
    font-weight: bold;
    font-size: 16px;
    color: #f1f1f1;
    text-decoration: none;
    text-transform: uppercase;
  }

  & a:hover {
    border-bottom: 2px solid #cc2222;
    transition: border 0.09s ease-in-out;

  }
`;