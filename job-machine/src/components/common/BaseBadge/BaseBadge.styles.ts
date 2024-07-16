import styled from 'styled-components';
import { Badge as AntBadge } from 'antd';

export const Badge = styled(AntBadge)`
  .ant-badge-count-sm {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
