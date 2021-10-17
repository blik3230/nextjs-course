import cn from 'classnames';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({
  children,
  size = 's',
  color = 'ghost',
  href,
  className,
  ...restProps
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.primary]: color === 'primary',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
      })}
      {...restProps}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
