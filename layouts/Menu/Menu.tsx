import cn from 'classnames';
import React from 'react';
import { useAppContext } from '../../contexts/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/servises.svg';
import styles from './Menu.module.css';
import { MenuProps } from './Menu.props';
import Link from 'next/link';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товарі',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = ({}: MenuProps): JSX.Element => {
  const { menu, firstCategory } = useAppContext();

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => {
          const menuItemIsActive = menuItem.id == firstCategory;

          return (
            <div key={menuItem.route}>
              <Link href={`/${menuItem.route}`}>
                <a>
                  <div
                    className={cn(styles.firstLevel, {
                      [styles.firstLevelActive]: menuItemIsActive,
                    })}
                  >
                    {menuItem.icon}
                    <span>{menuItem.name}</span>
                  </div>
                </a>
              </Link>
              {menuItemIsActive && buildSecondLevel(menuItem)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={cn(styles.secondLevel)}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link key={p._id} href={`/${route}/${p.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false,
          })}
        >
          {p.category}
        </a>
      </Link>
    ));
  };

  return <div className={cn(styles.menu)}>{buildFirstLevel()}</div>;
};
