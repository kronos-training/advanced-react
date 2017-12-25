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

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  }

  render() {
    const { articles } = this.state;

    return (
      <ArticleList 
        articles={articles}
        articleActions={this.articleActions} />
    );
  }
}

export default App;