import React, { ReactNode } from 'react';
import { TagProps } from 'antd/lib/tag';
import { TagContainer } from "./BaseTag.styled"

interface BaseTagProps extends TagProps {
    shadow?: boolean;
}

export const BaseTag: React.FC<BaseTagProps> = ({ children, shadow, ...props }) => {
    const { onChange, onSelect, ...tagContainerProps } = props;

    return (
      <TagContainer $shadow={shadow} {...tagContainerProps}>
        {children}
      </TagContainer>
    );
};