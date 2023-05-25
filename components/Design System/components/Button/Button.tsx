'use client';

import React, { type ElementType, FC, PropsWithoutRef, RefAttributes } from 'react';
import { type variant, type sizes, type colors, type DynamicTag, type shape, type border } from '../../assets/types';
import rippleEffect from '../rippleEffect';
import cs from './scss/button.module.scss';
import Group, { type IGroup } from './Group';

export interface IButton {
  variant?: variant;
  size?: sizes;
  sizeWidth?: sizes;
  sizeHeight?: sizes;
  FontSize?: sizes;

  ripple?: boolean;

  isLoading?: boolean;
  loadingType?: any;

  color?: colors;
  border?: border;
  shape?: shape;
  animation?: string;
  animationDuration?: 100 | 200 | 300 | 400; //Not Defined, just layout
}

const Button = <T extends ElementType = 'button'>(props: DynamicTag<T> & IButton) => {
  const { tag: Component = 'button', children = 'Button', size = 'md', ripple = true, ...restProps } = props;

  const defaultProps = {
    ...restProps,
    className: `${cs.button} ${props.className ?? ''}`,
    Size: size,
    size: props?.oldSize,
  };

  return (
    <Component
      role="button"
      aria-disabled={props?.disabled}
      onClick={(e) => {
        rippleEffect(e);
      }}
      {...defaultProps}>
      {children}
    </Component>
  );
};

Button.constructor.prototype.Group = Group;

type ButtonComponent<T extends ElementType = 'button', P = {}> = React.ForwardRefExoticComponent<PropsWithoutRef<P> & DynamicTag<T>> & {
  Group(props: IGroup): any;
};

export default Button as ButtonComponent<ElementType, IButton>;
