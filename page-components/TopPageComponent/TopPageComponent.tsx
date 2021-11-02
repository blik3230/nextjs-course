import cn from 'classnames';
import React from 'react';
import { Htag, P, Tag } from '../../components';
import { AdvantageItem } from '../../components';
import { HhData } from '../../components/HhData/HhData';
import { TopLevelCategory } from '../../interfaces/page.interface';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';

const TopPageComponent = ({
  products,
  page,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={cn(styles.root)}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="green" size="m">
            {products.length}
          </Tag>
        )}
        <span>Sorting</span>
      </div>

      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
        <span>Sorting</span>
      </div>

      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}

      <div className={styles.advantages}>
        <Htag tag="h2">Преимущества</Htag>

        <div className={styles.advantagesList}>
          <AdvantageItem titleContent="Мобильность специалиста">
            Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw
            и ими можно успешно пользоваться дома или в дороге. Современные
            ноутбуки хорошо справляются с нагрузкой, так зачем загонять
            специалиста в душный офис. В этой профессии важным считается
            вдохновение, поэтому дизайнеры ищут его в разных местах.
          </AdvantageItem>

          <AdvantageItem titleContent="Индивидуальный график работы">
            Если освоить программы и найти заказы по графическому дизайну,
            вскоре окажется, что вставать в 6:00 вовсе не обязательно. Когда у
            человека вечером продуктивность выше, надо этим пользоваться.
          </AdvantageItem>

          <AdvantageItem titleContent="Контроль дохода">
            Прохождения собеседований в крупные компании могут принести свои
            плоды. В случае с профессией графического дизайна вполне возможна
            работа на рынке фриланса. Специалист сам выбирает регион, с кем
            работать и сколько работать. В связи с этим получится точно
            контролировать доход в большую или меньшую сторону.
          </AdvantageItem>

          <AdvantageItem titleContent="Выбор работы">
            Пользователи сети, которые знают Photoshop, не обязательно должны
            выполнять одну работу. Профессия графического дизайнера дает
            возможность отойти от обычных проектов и повысить скил в других
            компьютерных программах.
          </AdvantageItem>
        </div>

        <P size="l">
          При завершении очередного проекта над графикой, специалист всегда
          задает себе вопрос о дальнейших перспективах. Отличие профессиональных
          дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается
          логотип новой компании, а завтра вполне можно переключиться на
          иллюстрацию культовой книги.
        </P>
      </div>

      <div className={styles.skills}>
        <Htag tag="h2">Получаемые навыки</Htag>
        <div className={styles.skillsTags}>
          <Tag color="primary" size="s">
            Работа в Photoshop
          </Tag>
          <Tag color="primary" size="s">
            Подготовка макетов
          </Tag>
          <Tag color="primary" size="s">
            Графический дизайн
          </Tag>
          <Tag color="primary" size="s">
            Web дизайн
          </Tag>
          <Tag color="primary" size="s">
            Дизайн сайтов
          </Tag>
        </div>
      </div>
    </div>
  );
};

export default TopPageComponent;
