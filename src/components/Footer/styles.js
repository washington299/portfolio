import styled from 'styled-components';

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;
