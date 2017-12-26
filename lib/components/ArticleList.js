import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, store }) => (
  <div>
    {
      Object.values(articles).map(article => 
        <Article 
          key={article.id}
          article={article}
          store={store}
        />
      )
    }
  </div>
);

export default ArticleList;