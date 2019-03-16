// @flow
import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import NewsCard from './cards/NewsCard';

type Props = {
  news: Object,
  openPost: Function
};

const News = (props: Props) => {
  const { news, openPost } = props;

  const generateNewsCards = () => {
    const newsCards = [];
    news.forEach(newsItem => {
      newsCards.push(<NewsCard newsItem={newsItem} openPost={openPost} />);
    });
    return newsCards;
  };

  return (
    <div>
      <Heading size={3}>News</Heading>
      {generateNewsCards()}
    </div>
  );
};

export default News;
