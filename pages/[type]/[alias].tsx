import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import axios from 'axios';
import { firstLevelMenu } from '../../helpers/helpers';
import { MenuItem } from '../../interfaces/menu.interface';
import {
  TopLevelCategory,
  TopPageModel,
} from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { withGeneralLayout } from '../../layouts';
import TopPageComponent from '../../page-components/TopPageComponent/TopPageComponent';

const TopPage = ({
  firstCategory,
  page,
  products,
  menu,
}: TopPageProps): JSX.Element => {
  return (
    <TopPageComponent
      firstCategory={firstCategory}
      menu={menu}
      page={page}
      products={products}
    />
  );
};

export default withGeneralLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const firstLevelMenuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      { firstCategory: firstLevelMenuItem.id }
    );

    paths.concat(
      menu.flatMap(
        () =>
          (paths = paths.concat(
            menu.flatMap((s) =>
              s.pages.map((p) => `/${firstLevelMenuItem.route}/${p.alias}`)
            )
          ))
      )
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      { firstCategory: firstCategoryItem.id }
    );

    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
    );

    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
      {
        category: page.category,
        limit: 10,
      }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
