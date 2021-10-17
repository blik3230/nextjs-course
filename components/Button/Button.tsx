import React from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';
import ArrowIcon from './array.svg';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...restProps}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
