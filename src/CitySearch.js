import React, { Component } from 'react';
import { mockData } from './mock-data';
import { extractLocations } from './api';

class CitySearch extends Component {
  state = {
    locations: extractLocations(mockData),
    query: '',
    suggestions: [],
  };

  handleInputChanged = (e) => {
    this.setState({ query: e.target.value });
  };

  handleItemClicked = (value) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <div className='CitySearch'>
        <input
          type='text'
          className='city'
          value={this.state.query}
          onChange={this.handleInputChanged}></input>
        <ul className='suggestions'>
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CitySearch;
