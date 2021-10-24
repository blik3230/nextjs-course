import cn from 'classnames';
import React from 'react';
import { AppContextProvider, IAppContext } from '../../contexts/app.context';
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

export const withGeneralLayout = <
  T extends Record<string, unknown> & IAppContext
>(
  Component: React.FunctionComponent<T>
) => {
  return function WithGeneralLayout(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <GeneralLayout>
          <Component {...props} />
        </GeneralLayout>
      </AppContextProvider>
    );
  };
};
