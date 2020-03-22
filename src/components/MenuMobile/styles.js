import styled from 'styled-components';
import { SecondFont } from '../utils/themes';

export default styled.div`
  width: 50px;
  height: 50px;
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
  cursor: pointer;
  position: absolute;
  z-index: 999;

  span {
    width: 40px;
    height: 4px;
    background-color: ${SecondFont};
  }

  @media only screen and (max-width: 700px) {
    display: flex;
  }
`;