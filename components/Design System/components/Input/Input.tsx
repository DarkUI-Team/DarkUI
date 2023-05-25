import React, { FC, InputHTMLAttributes } from 'react';
import cs from './scss/input.module.scss';
import { border, colors, shape, sizes, variant } from '../../assets/types';

interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  variant?: variant;
  Size?: sizes;
  sizeWidth?: sizes; //In soon
  sizeHeight?: sizes; //In soon
  ripple?: any;

  isLoading?: boolean;
  loadingType?: any;

  color?: colors;
  border?: border;
  shape?: shape;
  animation?: string;
  animationDuration?: 100 | 200 | 300 | 400; //Not Defined, just layout
}

const Input: FC<Iinput> = (props) => {
  const { placeholder = 'TESCIK', ...restProps } = props;

  const defaultProps = {
    ...restProps,
    placeholder,
    className: `${cs.input} ${props.className}`,
  };

  return <input {...defaultProps} />;
};

export default Input;
