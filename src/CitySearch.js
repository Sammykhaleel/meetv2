import React, { Component } from 'react';
import { InfoAlert, WarningAlert } from './Alert';

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
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        warningText: '',
        infoText:
          'We can not find the city you are looking for. Please try another city',
      });
      if (value.includes('fuck') || value.includes('shit')) {
        this.setState({
          query: value,
          warningText: 'What??!! 🤬🤬🤬',
          infoText: '',
        });
      }
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: '',
        warningText: '',
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: '',
      warningText: '',
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <InfoAlert className="info" text={this.state.infoText} />
        <WarningAlert className="warning" text={this.state.warningText} />
        <label>Name of city: </label>
        <div>
          <input
            label="City name"
            type="text"
            className="citySearchInput"
            value={this.state.query}
            onChange={this.handleInputChanged}
          />
          <ul
            className={
              this.state.showSuggestions
                ? 'suggestions showSuggestions'
                : 'display-none'
            }
          >
            {this.state.suggestions.map((suggestion) => (
              <li
                className="suggestionCity"
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </li>
            ))}
            <li onClick={() => this.handleItemClicked('all')}>
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
