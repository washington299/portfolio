import styled from 'styled-components';
import {
  defaultBackground,
  defaultFont,
  SecondFont,
  secondBackground,
} from '../../src/utils/themes';

export const Styles = styled.div`
  @media only screen and (max-width: 700px) {
    ::first-line {
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  margin: 0 10px;

  .form-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form--input-area {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 20px 0;
      width: 100%;

      label {
        font-size: 18px;
        margin-bottom: 5px;
      }
      input {
        width: 100%;
        color: ${defaultFont};
        background-color: ${defaultBackground};
        border: none;
        padding: 10px 0;
        font-size: 16px;
        border: 1px solid #aaa;
        border-top: none;
        border-left: none;
        border-right: none;
        outline: none;
      }
      textarea {
        height: 200px;
        resize: none;
        font-size: 18px;
      }
      button {
        width: 100%;
        padding: 10px 0;
        margin-top: 20px;
        background-color: ${SecondFont};
        color: ${secondBackground};
        border: none;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;
