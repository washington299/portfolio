import styled from 'styled-components';

export const Intro = styled.span`
  margin: 15px 0;
  font-size: 20px;
  text-align: center;
`;

export const Star = styled.div`
  display: flex;
  align-items: center;

  span {
    width: 150px;
    height: 4px;
  }
  svg {
    font-size: 25px;
    margin: 0 10px;
  }

  @media only screen and (max-width: 700px) {
    span {
      width: 100px;
    }
  }
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;

  svg {
    font-size: 30px;
    margin-bottom: 5px;
  }
`;

export const Article = styled.article`
  a {
    text-decoration: none;
    color: var(--font-secondary);
  }
`;
