import styled from 'styled-components';
import {
  SecondFont,
  defaultFont,
  secondBackground,
  thirdBackground,
} from '../../utils/themes';

export default styled.div`
  width: 33%;

  .box-link {
    text-decoration: none;
    color: ${defaultFont};

    :hover {
      text-decoration: underline;
    }
    .box__background {
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

    .box-info {
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
      .box-span-area {
        display: flex;
        justify-content: center;

        .box-title {
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
    width: 50%;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;
