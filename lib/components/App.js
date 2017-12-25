import React, { Component } from 'react';
// import DataApi from 'state-api';
// import axios from 'axios';
import ArticleList from './ArticleList';

class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  };

  // async componentDidMount() {
  //   const response = await axios.get('/data');
  //   const api = new DataApi(response.data);

  //   this.setState( () => ({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors(),
  //   }));
  // }

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