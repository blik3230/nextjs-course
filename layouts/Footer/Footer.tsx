import cn from 'classnames';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({
  className,
  ...restProps
}: FooterProps): JSX.Element => {
  return (
    <div className={cn(styles.root, className)} {...restProps}>
      Footer
    </div>
  );
};
