import styled from 'styled-components';
import {
  SecondFont,
  defaultFont,
  secondBackground,
  thirdBackground,
} from '../../src/utils/themes';

export default styled.div`
  .project-area {
    display: flex;
    flex-wrap: wrap;

    .project-box {
      width: 33%;
    }
    .project-link {
      text-decoration: none;
      color: ${defaultFont};

      :hover {
        text-decoration: underline;
      }
      .project-box__background {
        margin: 10px;
        background-color: ${secondBackground};
        border-radius: 10px;
        cursor: pointer;

        :hover {
          background-color: ${thirdBackground};
          border: 1px solid ${SecondFont};
          border-radius: 10px;
        }
      }

      .project-info {
        display: flex;
        flex-direction: column;
        padding: 10px;
        text-align: center;

        img {
          width: 100%;
          height: 200px;
          margin-bottom: 10px;

          :hover {
            background-color: ${thirdBackground};
            border: none;
          }
        }
        .project-span-area {
          display: flex;
          justify-content: center;

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
  }

  @media only screen and (max-width: 950px) {
    .project-area {
      .project-box {
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .project-area {
      .project-box {
        width: 100%;
      }
    }
  }
`;
