import styled from 'styled-components';

export const GridArea = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
`;

export const PagePosition = styled.div`
  grid-column: 2 / 3;
  position: relative;

  @media only screen and (max-width: 700px) {
    grid-column: 1 / 3;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  color: var(--font-secondary);

  svg {
    display: block;
    margin-left: 10px;
    font-size: 25px;
  }
`;

export const ContentArea = styled.section`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: center;
  padding: 0 30px;

  @media only screen and (max-width: 700px) {
    padding: 0 10px;
  }
`;

export const Error = styled.span`
  color: #ff0000;
  font-size: 15px;
  font-weight: 600;
  margin-top: 5px;
`;
