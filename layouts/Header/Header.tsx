import cn from 'classnames';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

export const Header = ({
  className,
  ...restProps
}: HeaderProps): JSX.Element => {
  return (
    <div className={cn(styles.root, className)} {...restProps}>
      Header
    </div>
  );
};
