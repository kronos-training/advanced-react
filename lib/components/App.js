import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  state = this.props.store.getState();

  render() {
    const { articles } = this.state;
    
    return (
      <div>
        <SearchBar />
        <ArticleList 
          articles={articles} />
      </div>
    );
  }
}

export default App;