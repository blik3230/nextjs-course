import cn from 'classnames';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

export const Card = ({
  color = 'white',
  children,
  className,
  ...restProps
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.root, className, {
        [styles.blue]: color === 'blue',
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};
