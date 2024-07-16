import React, { ComponentProps } from 'react';
import { Select as AntSelect } from 'antd';
import { RefSelectProps } from 'antd/lib/select';
import {SelectContainer} from './BaserSelect.styled';
import { Dimension } from '@/interfaces/interfaces';

export const { Option } = AntSelect;
export interface BaseSelectProps extends ComponentProps<typeof AntSelect> {
  width?: Dimension;
  shadow?: boolean;
  className?: string;
  ref?: (instance: RefSelectProps | null) => void;
}

export const BaseSelect = React.forwardRef<RefSelectProps, BaseSelectProps>(
  ({ className, width, shadow, children, ...props }, ref) => (
    <SelectContainer
      getPopupContainer={(triggerNode) => triggerNode}
      ref={ref}
      className={className}
      $width={width}
      $shadow={shadow}
      {...props}
    >
      {children}
    </SelectContainer>
  ),
);
