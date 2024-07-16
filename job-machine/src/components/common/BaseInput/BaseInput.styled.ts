import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const InputContainer = styled(AntInput)`
  .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover
    .ant-select-selector {
    border-color: transparent;
  }

  .ant-input-group-addon:first-child,
  .ant-input-group-addon:last-child,
  .ant-input-group-addon .ant-select .ant-select-selection-item {
    min-width: 5.5rem;
    color: #ccc;
    font-weight: 500;
    font-size: 24px;
  }

  .ant-select-arrow {
    color: #ccc;
  }
`;
