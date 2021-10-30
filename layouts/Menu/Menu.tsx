import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppContext } from '../../contexts/app.context';
import { firstLevelMenu } from '../../helpers/helpers';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.css';
import { MenuProps } from './Menu.props';

export const Menu = ({}: MenuProps): JSX.Element => {
  const { menu, firstCategory, setMenu } = useAppContext();
  const router = useRouter();

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => {
          const menuItemIsActive = menuItem.id === firstCategory;

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
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])
          ) {
            m.isOpened = true;
          }

          return (
            <div key={m._id.secondCategory}>
              <div
                className={cn(styles.secondLevel)}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link key={p._id} href={`/${route}/${p.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
          })}
        >
          {p.category}
        </a>
      </Link>
    ));
  };

  const openSecondLevel = (secondCategory: string) => {
    if (setMenu) {
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }

          return m;
        })
      );
    }
  };

  return <div className={cn(styles.menu)}>{buildFirstLevel()}</div>;
};
