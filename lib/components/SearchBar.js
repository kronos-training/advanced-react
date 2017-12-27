import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    // console.log(this.state.searchTerm);
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300)

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => {
      this.doSearch();
    });
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  componentWillUpdate() {
    console.log('update')
  }

  render() {
    return (
      <input 
        type="search" 
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch} />      
    );
  }
}


export default storeProvider()(SearchBar);