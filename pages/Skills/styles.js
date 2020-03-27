import styled from 'styled-components';
import {
  SecondFont,
  defaultFont,
  secondBackground,
  thirdBackground,
} from '../../src/utils/themes';

export default styled.div`
  .skills-area {
    display: flex;
    flex-wrap: wrap;

    .skills-box {
      width: 33%;
    }
    .skills-box__background {
      margin: 10px;
      background-color: ${secondBackground};
      border-radius: 10px;

      :hover {
        background-color: ${thirdBackground};
        border: 1px solid ${SecondFont};
        border-radius: 5px;
      }
    }

    .skills-info {
      display: flex;
      flex-direction: column;
      padding: 10px;
      text-align: center;

      img {
        width: 100%;
        height: 200px;
        margin-bottom: 10px;
      }
      .skills-link {
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: ${defaultFont};

        :hover {
          text-decoration: underline;
        }

        .skills-title {
          font-size: 18px;
        }
        svg {
          font-size: 23px;
          margin-left: 10px;
          color: ${defaultFont};
        }
      }
    }
  }

  @media only screen and (max-width: 950px) {
    .skills-area {
      .skills-box {
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
  @media only screen and (max-width: 450px) {
    .skills-area {
      .skills-box {
        width: 100%;
      }
    }
  }
`;
