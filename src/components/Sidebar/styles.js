/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const SidebarStyle = styled.nav`
  grid-column: 1 / 2;
  width: 250px;
  height: 100%;
  background-color: var(--background-secondary);
  box-shadow: 1px 0 3px #aaa;
  z-index: 1;

  @media only screen and (max-width: 700px) {
    display: ${props => props.display};
    position: fixed;
  }
`;

export const Avatar = styled.div`
  width: 130px;
  height: 130px;
  margin: auto;
  padding: 50px 0;

  img {
    width: 100%;
  }
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: pointer;
`;

export const MenuItem = styled.li`
  text-align: center;
  padding: 20px 0;
  font-weight: 600;

  a {
    color: var(--font-secondary);
    text-decoration: none;
  }
  &:hover {
    background-color: var(--background-primary);
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 100px;
  text-align: center;

  svg {
    color: var(--font-secondary);
    font-size: 25px;
    margin: 0 10px;
  }
`;
