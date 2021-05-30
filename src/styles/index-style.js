import styled from 'styled-components';

export const Intro = styled.span`
  margin: 15px 0;
  font-size: 20px;
  text-align: center;
`;

export const Draw = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.span`
  width: 120px;
  height: 3px;
  background-color: var(--font-primary);
`;

export const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

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
