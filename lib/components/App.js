import React, { Component } from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      authors: api.getAuthors(),
      articles: api.getArticles(),
    };
  }

  render() {
    const { articles, authors } = this.state;

    return (
      <ArticleList 
        articles={articles}
        authors={authors} />
    );
  }
}

export default App;