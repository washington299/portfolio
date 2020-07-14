import styled from 'styled-components';

export default styled.div`
  width: 50px;
  height: 50px;
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
  cursor: pointer;
  z-index: 1;

  span {
    width: 40px;
    height: 4px;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
  }
`;
