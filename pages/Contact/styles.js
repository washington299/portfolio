import styled from 'styled-components';
import {
  defaultBackground,
  defaultFont,
  SecondFont,
  secondBackground,
} from '../../src/utils/themes';

export const Form = styled.form`
  width: 100%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldArea = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
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
`;

export const TextArea = styled.textarea`
  height: 200px;
  resize: none;
  font-size: 18px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 600px;
  padding: 10px 0;
  margin-top: 20px;
  background-color: ${SecondFont};
  color: ${secondBackground};
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
