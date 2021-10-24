import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({
  className,
  ...restProps
}: SidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.root, className)} {...restProps}>
      <Menu />
    </div>
  );
};
