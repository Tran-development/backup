import { FC } from 'react';
import type { BreadcrumbProps } from 'antd';
import type { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import {Breadcrumb} from './BaseBreadcrumb.styles';

export type BaseBreadcrumbItemType = BreadcrumbItemType;

export type BaseBreadcrumbProps = BreadcrumbProps;

export const BaseBreadcrumb: FC<BaseBreadcrumbProps> = (props) => {
  return <Breadcrumb {...props} />;
};
