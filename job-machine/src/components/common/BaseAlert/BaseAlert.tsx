import React from 'react';
import type { AlertProps } from 'antd';
import {Alert} from './BaseAlert.styles';

export type BaseAlertProps = AlertProps;

export const BaseAlert: React.FC<BaseAlertProps> = (props) => {
  return <Alert {...props} />;
};
