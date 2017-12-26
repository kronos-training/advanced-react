import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
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


export default SearchBar;     