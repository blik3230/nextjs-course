import cn from 'classnames';
import React from 'react';
import { P } from '..';
import { Htag } from '../Htag/Htag';
import styles from './AdvantageItem.module.css';
import { AdvantageItemProps } from './AdvantageItem.props';
import CheckIcon from './check.svg';

export const AdvantageItem = ({
  titleContent,
  children,
}: AdvantageItemProps): JSX.Element => {
  return (
    <div className={cn(styles.root)}>
      <CheckIcon />
      <Htag tag="h3" className={styles.title}>
        {titleContent}
      </Htag>
      <P className={styles.content} size="l">
        {children}
      </P>
    </div>
  );
};
