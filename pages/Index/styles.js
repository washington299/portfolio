import styled from 'styled-components';
import { defaultFont, SecondFont } from '../../src/utils/themes';

export default styled.div`
  .home-introduction {
    margin: 15px 0;
    font-size: 20px;
    text-align: center;
  }
  .home-star {
    display: flex;
    align-items: center;

    span {
      width: 150px;
      height: 4px;
      background-color: ${defaultFont};
    }
    svg {
      font-size: 25px;
      margin: 0 10px;
    }
  }
  .home-techs {
    display: flex;
    align-items: center;
    margin-top: 15px;

    .tech {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 10px;

      svg {
        font-size: 30px;
        margin-bottom: 5px;
      }
    }
  }

  article a {
    color: ${SecondFont};
    text-decoration: none;
  }

  @media only screen and (max-width: 700px) {
    .home-star span {
      width: 100px;
    }
  }
`;
