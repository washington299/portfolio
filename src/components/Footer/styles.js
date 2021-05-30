import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  background-color: var(--background-secondary);
  margin-top: 30px;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 500px) {
    position: unset;
  }
`;
