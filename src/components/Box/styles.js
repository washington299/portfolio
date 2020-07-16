import styled from 'styled-components';

export const BoxStyle = styled.div`
  width: 33%;

  @media only screen and (max-width: 950px) {
    width: 50%;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  color: var(--font-primary);
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export const BoxArea = styled.div`
  background-color: var(--background-secondary);
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;

  :hover {
    background-color: var(--background-tertiary);
    border: 1px solid var(--font-secondary);
    border-radius: 10px;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border: 1px solid #aaa;
    border-radius: 5px;

    :hover {
      background-color: var(--background-tertiary);
      border: none;
    }
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-size: 18px;
  }
  svg {
    color: var(--font-primary);
    font-size: 23px;
    margin-left: 10px;
  }
`;
