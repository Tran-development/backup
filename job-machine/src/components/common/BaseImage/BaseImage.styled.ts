import { Image } from 'antd';
import styled from 'styled-components';

export const StyledImage = styled(Image)`
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  width: 100%;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
`;
