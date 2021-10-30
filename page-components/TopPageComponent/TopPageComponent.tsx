import cn from 'classnames';
import React from 'react';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';

const TopPageComponent = ({ products }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={cn(styles.root)}>
      <ul>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </ul>
    </div>
  );
};

export default TopPageComponent;
