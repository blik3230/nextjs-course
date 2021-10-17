import cn from 'classnames';
import React from 'react';
import styles from './GenaralLayout.module.css';
import { GeneralLayoutProps } from './GeneralLayout.props';
import { Footer, Header, Sidebar, Main } from '../index';

const GeneralLayout = ({
  children,
  className,
  ...restProps
}: GeneralLayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.root, className)} {...restProps}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <Main className={styles.main}>{children}</Main>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withGeneralLayout = <T extends Record<string, unknown>>(
  Component: React.FunctionComponent<T>
) => {
  return function WithGeneralLayout(props: T) {
    return (
      <GeneralLayout>
        <Component {...props} />
      </GeneralLayout>
    );
  };
};
