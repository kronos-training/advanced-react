import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends PureComponent {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextState.articles !== this.state.articles
  //     || nextState.searchTerm !== this.state.searchTerm
  //   );
  // }
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onChangeStore);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }

  state = this.appState();
  // state = this.props.store.getState();
  
  onChangeStore = () => {
    // this.setState(this.props.store.getState());
    this.setState(this.appState());
  }
  
  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');

    if (searchTerm) {
      articles = pickBy(articles, (value, /*key*/) => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList 
          articles={articles} />
        {/* { ArticleList({ articles }) } */}
      </div>
    );
  }
}

export default App;