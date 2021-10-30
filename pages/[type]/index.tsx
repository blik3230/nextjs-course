import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '../../helpers/helpers';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { withGeneralLayout } from '../../layouts';

const TypeIndexPage = ({ firstCategory }: TypeIndexPageProps): JSX.Element => {
  return (
    <>
      <h1>The Type index page</h1>
      <p>{firstCategory}</p>
    </>
  );
};

export default withGeneralLayout(TypeIndexPage);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => '/' + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeIndexPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  console.log(firstCategoryItem);
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

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface TypeIndexPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
