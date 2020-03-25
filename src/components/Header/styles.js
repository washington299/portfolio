import styled from 'styled-components';
import { defaultFont } from '../../utils/themes';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  span {
    color: ${defaultFont};
    font-weight: 600;
    margin: 0 10px;
  }
`;
