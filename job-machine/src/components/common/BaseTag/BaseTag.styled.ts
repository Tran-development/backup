import styled from 'styled-components';
import { Tag as AntTag } from 'antd';
import { Dimension } from '@/interfaces/interfaces';

export interface InternalSelectProps {
  $width?: Dimension;
  $shadow?: boolean;
}

export const TagContainer = styled(AntTag)<InternalSelectProps>`
  width: auto;
`;
