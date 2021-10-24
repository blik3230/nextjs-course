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
      {/*<div className={styles.grid}>*/}
      {/*  <div>1</div>*/}
      {/*  <div>2</div>*/}
      {/*  <div>3</div>*/}
      {/*  <div>4</div>*/}
      {/*  <div>5</div>*/}
      {/*  <div>6</div>*/}
      {/*  <div>7</div>*/}
      {/*  <div>8</div>*/}
      {/*  <div>9</div>*/}
      {/*</div>*/}
    </div>
  );
};
