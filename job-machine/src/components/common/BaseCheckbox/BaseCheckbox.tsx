import React from "react";
import { CheckboxProps, CheckboxRef } from "antd";
import { CheckboxItem, CheckboxGroup } from "./BaseCheckbox.styled";

export type BaseCheckboxRef = CheckboxRef;

export type BaseCheckboxProps = CheckboxProps;

const Checkbox = React.forwardRef<BaseCheckboxRef, BaseCheckboxProps>(
  (props, ref) => {
    return <CheckboxItem {...props} ref={ref} />;
  }
);

type CheckboxForwardRef = typeof Checkbox;

interface BaseCheckboxInterface extends CheckboxForwardRef {
  Group: typeof CheckboxGroup;
}

export const BaseCheckbox = Checkbox as BaseCheckboxInterface;
