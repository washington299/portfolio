import styled from 'styled-components';

export const HeaderStyle = styled.header`
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

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
  font-weight: 600;
  margin: 0 10px;
`;
