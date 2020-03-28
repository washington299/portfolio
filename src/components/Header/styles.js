import styled from 'styled-components';
import { defaultFont } from '../../utils/themes';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;

  @media only screen and (max-width: 700px) {
    justify-content: space-between;
  }
`;

export const SwitchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const ColorText = styled.span`
  color: ${defaultFont};
  font-weight: 600;
  margin: 0 10px;
`;
