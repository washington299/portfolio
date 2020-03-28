import styled from 'styled-components';
import { SecondFont, secondBackground } from '../themes';

export const PagePosition = styled.div`
  flex: 1;
  margin-left: 250px;

  @media only screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

export const Title = styled.span`
  display: inline-block;
  color: ${SecondFont};
  font-size: 26px;
  border-bottom: 5px solid ${SecondFont};
  padding-bottom: 5px;
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

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 30px;
  background-color: ${secondBackground};
`;

export const Error = styled.span`
  color: #ff0000;
  font-size: 15px;
  font-weight: 600;
  margin-top: 5px;
`;
