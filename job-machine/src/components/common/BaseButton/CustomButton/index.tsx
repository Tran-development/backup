import React from 'react';
import {
  Button as AntButton,
  ButtonProps as AntButtonProps,
  Button,
} from 'antd';
import { BtnContainer } from './CustomButton.styled';
import { Severity } from '@/interfaces/interfaces';

interface BaseButtonProps extends AntButtonProps {
  severity?: Severity;
  noStyle?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  severity,
  noStyle,
  children,
  ...props
}) => (
  <BtnContainer>
    <AntButton className='custom-button-content' {...props}>
      {children}
    </AntButton>
  </BtnContainer>
);
