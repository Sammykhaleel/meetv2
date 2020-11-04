import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    locations: this.props.locations,
    query: '',
    suggestions: [],
    showSuggestions: false,
  };

  handleInputChanged = (e) => {
    this.setState({ showSuggestions: true });
    const value = e.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    return this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className='CitySearch'>
        <div>
          <input
            id='outlined-basic'
            variant='outlined'
            label='City name'
            type='text'
            className='citySearchInput'
            value={this.state.query}
            onChange={this.handleInputChanged}
          />
          <ul
            className={
              this.state.showSuggestions
                ? 'suggestions showSuggestions'
                : 'display-none'
            }
            spacing={2}
            justify='center'>
            {this.state.suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}>
                {suggestion}
              </li>
            ))}
            <button
              onClick={() => {
                this.handleItemClicked('all');
              }}>
              <b>See all cities</b>
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
