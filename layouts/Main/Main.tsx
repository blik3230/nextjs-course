import cn from 'classnames';
import styles from './Main.module.css';
import { MainProps } from './Main.props';

export const Main = ({
  children,
  className,
  ...restProps
}: MainProps): JSX.Element => {
  return (
    <div className={cn(styles.root, className)} {...restProps}>
      {children}
    </div>
  );
};
