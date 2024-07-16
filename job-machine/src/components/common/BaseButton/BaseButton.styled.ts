import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

export const CustomButton = styled(AntdButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.3rem;
  transition-duration: 0.3s;
  outline: none;
  border: none;
  min-width: 60px;

  &.btn-delete-all {
    color: var(--text-color);
    height: 30px !important;
    margin-bottom: -21px;
    border-radius: 4px;
    font-size: 14px;
    background: var(--button-primary-color);
    outline: none;
    font-weight: bold;
  }

  &.btn-delete-all:hover {
    background-color: var(--hover-primary-color) !important;
    color: var(--text-color) !important;
  }

  &.btn-accept-all {
    color: var(--text-color);
    height: 30px !important;
    margin-bottom: -21px;
    border-radius: 4px;
    margin-left: 8px;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    background-color: var(--button-secondary-color) !important;
  }

  &.btn-accept-all:hover {
    background-color: var(--hover-secondary-color) !important;
    color: var(--text-color) !important;
  }

  &.btn-delete {
    background-color: var(--button-primary-color) !important;
    color: var(--text-color) !important;
  }

  &.btn-delete:hover {
    background-color: var(--hover-primary-color) !important;
    color: var(--text-color) !important;
  }

  &.btn-accept {
    background-color: var(--button-secondary-color) !important;
    color: var(--text-color) !important;
  }

  &.btn-accept:hover {
    background-color: var(--hover-secondary-color) !important;
    color: var(--text-color) !important;
  }

  &.btn-reset {
    background-color: var(---container-color);
    color: var(--text-color-btn);
  }

  &.btn-reset:hover {
    background-color: var(--border-color) !important;
    color: var(--text-color) !important;
  }
  &.btn-find {
    background-color: var(--button-secondary-color) !important;
    color: var(--text-color) !important;
  }

  &.btn-find:hover {
    background-color: var(--hover-secondary-color) !important;
    color: var(--text-color);
  }
  color: var(--text-color);
  .ant-btn {
    border: 5px solid var(--text-color);
  }

  &.ant-btn-primary {
    background-color: var(--button-primary-color);
    &.ant-btn-primary:hover {
      background-color: red;
      color: #ffffff;
    }
  }

  &.ant-btn-secondary {
    background-color: #ffffff;
    border: #000000;
    color: #000000;
    &.ant-btn-secondary:hover {
      background-color: #dadada;
      color: #ffffff;
    }
  }
`;
