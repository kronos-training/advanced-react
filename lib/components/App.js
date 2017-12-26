import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
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

  onChangeStore = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onChangeStore);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  state = this.props.store.getState();
  
  render() {
    let { articles, searchTerm } = this.state;
    
    if (searchTerm) {
      articles = pickBy(articles, (value, /*key*/) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    
    return (
      <div>
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList 
          articles={articles} />
      </div>
    );
  }
}

export default App;