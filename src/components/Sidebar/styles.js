import styled from 'styled-components';
import {
  secondBackground,
  SecondFont,
  defaultBackground,
} from '../utils/themes';

export default styled.nav`
  width: 250px;
  height: 100%;
  background-color: ${secondBackground};
  box-shadow: 1px 0 3px #aaa;

  .avatar-img {
    width: 130px;
    height: 130px;
    margin: auto;
    padding: 50px 0;

    img {
      width: 100%;
    }
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    cursor: pointer;
  }
  .active-router {
    background-color: ${defaultBackground};
    border-left: 7px solid ${SecondFont};
  }
  li {
    text-align: center;
    padding: 20px 0;
    font-weight: 600;

    a {
      color: ${SecondFont};
      text-decoration: none;
    }
  }

  .social-media-icons {
    display: flex;
    justify-content: center;
    height: auto;
    align-items: center;
    margin-top: 100px;
    text-align: center;

    svg {
      color: ${SecondFont};
      font-size: 25px;
      margin: 0 10px;
    }
  }

  @media only screen and (max-width: 700px) {
    display: ${props => props.display};
  }
`;
