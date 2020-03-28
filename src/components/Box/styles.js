import styled from 'styled-components';
import {
  SecondFont,
  defaultFont,
  secondBackground,
  thirdBackground,
} from '../../utils/themes';

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
  text-decoration: none;
  color: ${defaultFont};

  :hover {
    text-decoration: underline;
  }
`;

export const BoxArea = styled.div`
  margin: 10px;
  background-color: ${secondBackground};
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: ${thirdBackground};
    border: 1px solid ${SecondFont};
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
      background-color: ${thirdBackground};
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
    font-size: 23px;
    margin-left: 10px;
    color: ${defaultFont};
  }
`;
