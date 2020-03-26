import styled from 'styled-components';
import {
  SecondFont,
  defaultFont,
  thirdBackground,
} from '../../src/utils/themes';

export default styled.div`
  .project-area {
    display: flex;
    flex-wrap: wrap;

    .project-box {
      width: 33%;
    }
    .project-box__background {
      margin: 10px;
    }

    .project-info {
      display: flex;
      flex-direction: column;
      padding: 15px;
      text-align: center;

      img {
        width: 100%;
        height: 200px;
        border: 1px solid ${SecondFont};
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        margin-bottom: 10px;

        :hover {
          background-color: ${thirdBackground};
          border: none;
        }
      }
      .project-link {
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: ${defaultFont};

        :hover {
          text-decoration: underline;
        }

        .project-title {
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
    .project-area {
      .project-box {
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
  @media only screen and (max-width: 450px) {
    .project-area {
      .project-box {
        width: 100%;
      }
    }
  }
`;
