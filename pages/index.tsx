import type { NextPage } from 'next';
import React from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withGeneralLayout } from '../layouts';

const Home: NextPage = () => {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Htag tag="h2">Text</Htag>
      <Htag tag="h3">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>

      <P size="s">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium
        aliquam dignissimos, dolorum eligendi et hic non omnis optio placeat
        porro possimus praesentium quis quo, recusandae. Debitis exercitationem
        nesciunt porro?
      </P>

      <P>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium
        aliquam dignissimos, dolorum eligendi et hic non omnis optio placeat
        porro possimus praesentium quis quo, recusandae. Debitis exercitationem
        nesciunt porro?
      </P>

      <P size="l">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium
        aliquam dignissimos, dolorum eligendi et hic non omnis optio placeat
        porro possimus praesentium quis quo, recusandae. Debitis exercitationem
        nesciunt porro?
      </P>

      <Tag>Small</Tag>
      <Tag size="m">Medium</Tag>
      <Tag color={'gray'}>Small</Tag>
      <Tag color={'gray'} size="m">
        Medium
      </Tag>
      <Tag color={'primary'}>Small</Tag>
      <Tag color={'primary'} size="m">
        Medium
      </Tag>
      <Tag color={'red'}>Small</Tag>
      <Tag color={'red'} size="m">
        Medium
      </Tag>
      <Tag color={'green'}>Small</Tag>
      <Tag color={'green'}>Small</Tag>
      <Tag href={'https://google.com'} size="m">
        Medium
      </Tag>
      <Tag href={'https://google.com'} size="m">
        Medium
      </Tag>
      <div>
        <Rating rating={2} onChange={(rating) => console.log(rating)} />
      </div>
      <div>
        <Rating
          rating={2}
          onChange={() => console.log('not editable - error')}
          editable={false}
        />
      </div>
      <div>
        <Rating rating={2} />
      </div>
    </div>
  );
};

export default withGeneralLayout(Home);
