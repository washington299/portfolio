import styled from 'styled-components';

export const GridArea = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
`;

export const PagePosition = styled.div`
  grid-column: 2 / 3;

  @media only screen and (max-width: 700px) {
    grid-column: 1 / 3;
  }
`;

export const Title = styled.span.attrs(() => ({
  className: 'title',
}))`
  display: inline-block;
  font-size: 26px;
  padding-bottom: 10px;
  margin: 30px 50px;

  svg {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;

    svg {
      display: block;
      margin-left: 10px;
      font-size: 25px;
    }
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
