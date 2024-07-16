import { forwardRef } from 'react';
import { CustomButton } from './BaseButton.styled';
import { Button as AntButton, ButtonProps } from 'antd';

export const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <CustomButton ref={forwardedRef} className={className} {...props}>
      {children}
    </CustomButton>
  )
);
