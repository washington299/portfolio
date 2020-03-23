import styled from 'styled-components';
import { defaultFont } from '../../utils/themes';

export default styled.div`
  margin: auto;
  display: flex;
  align-items: center;

  span {
    color: ${defaultFont};
    font-weight: 600;
    margin: 0 10px;
  }

  @media only screen and (max-width: 700px) {
    margin-right: 15px;
  }
`;
