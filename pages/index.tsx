import type { GetStaticProps } from 'next';
import React from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { withGeneralLayout } from '../layouts';
import axios from 'axios';

const Home = ({ menu }: HomeProps): JSX.Element => {
  return (
    <ul>
      {menu.map((item) => (
        <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
      ))}
    </ul>
  );
};

export default withGeneralLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
