import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { Dimension } from '@/interfaces/interfaces';

export interface InternalSelectProps {
  $width?: Dimension;
  $shadow?: boolean;
}

export const SelectContainer = styled(AntSelect)<InternalSelectProps>`
  width: 20%;

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: 500;
  }

  &.ant-select-borderless {
    background: #ccc !important;
    border-radius: 10px;
  }

  .ant-select-selection-placeholder {
    font-size: 12px;
  }

  .ant-select-item {
    min-height: unset;
    padding-block: 5px;
  }

  &.ant-select-multiple {
    &.ant-select-disabled .ant-select-selection-item {
      color: #ccc;
      border: 1px solid #ccc;
    }

    .ant-select-selection-item {
      border: 1px solid #ccc;
      margin-inline-end: 11px;
    }

    .ant-select-selector {
      padding-inline-start: 11px;
    }
  }
`;
