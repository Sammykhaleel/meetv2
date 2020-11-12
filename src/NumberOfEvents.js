import React, { Component } from 'react';
import { ErrorAlert, WarningAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  submitNumber = (event) => {
    const value = event.target.value;
    if (value > 32 || value < 1 || value === '') {
      this.setState({
        infoText: 'Please enter number between 1 ~ 32',
        warningText: '',
        numberOfEvents: value,
      });
    } else if (isNaN(value)) {
      this.setState({
        infoText: 'Please enter number',
        numberOfEvents: value,
        warningText: '',
      });
      if (value.includes('fuck') || value.includes('shit')) {
        this.setState({
          numberOfEvents: value,
          warningText: 'What??!! 🤬🤬🤬',
          infoText: '',
        });
      }
    } else {
      this.props.updateEvents(null, value);
      this.setState({ numberOfEvents: value, infoText: '', warningText: '' });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.infoText} />
        <WarningAlert text={this.state.warningText} />
        <label>Number of Events: </label>
        <input
          type="text"
          className="numberInput"
          value={this.state.numberOfEvents}
          onChange={this.submitNumber}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
