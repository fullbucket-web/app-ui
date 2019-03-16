// @flow
import React from 'react';
import Box from 'react-bulma-components/lib/components/box';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';

type NewsItem = {
  author: {
    name: string
  }
};

type Props = {
  newsItem: NewsItem,
  openPost: Function
};

const NewsCard = (props: Props) => {
  const { newsItem, openPost } = props;
  return (
    <Box className="news-card" onClick={() => openPost(newsItem.id)}>
      <Media>
        <Media.Item>
          <Heading className="news-card-title" size={4}>
            {newsItem.title}
          </Heading>
          <Heading size={5}>{newsItem.description}</Heading>
        </Media.Item>
        <Media.Item renderAs="figure" position="right">
          <img alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
        </Media.Item>
      </Media>
    </Box>
  );
};

export default NewsCard;
