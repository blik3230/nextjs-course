import cn from 'classnames';
import { PProps } from './P.props';
import styles from './P.module.css';

export const P = ({
  size = 'm',
  children,
  className,
  ...restProps
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...restProps}
    >
      {children}
    </p>
  );
};
