/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const SidebarStyle = styled.nav`
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: 1px 0 3px #aaa;
  z-index: 1;
  position: fixed;

  @media only screen and (max-width: 700px) {
    display: ${props => props.display};
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
  ${props => props.active && css`
    background-color: ${({ theme }) => theme.colors.background.primary};
    border-left: 8px solid ${({ theme }) => theme.colors.font.secondary};
  `}

  text-align: center;
  padding: 20px 0;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.primary};
  }
  a {
    color: ${({ theme }) => theme.colors.font.secondary};
    text-decoration: none;
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
    color: ${({ theme }) => theme.colors.font.secondary};
    font-size: 25px;
    margin: 0 10px;
  }
`;
