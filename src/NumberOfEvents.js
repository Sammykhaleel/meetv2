import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 0,
  };

  submitNumber = () => {
    this.setState({ numberOfEvents: 1 });
  };

  render() {
    return (
      <form className='numberOfEvent'>
        <label for='numberInput'>Number of events to show</label>
        <input type='text' id='numberInput'></input>
        <input
          className='numberSubmit'
          type='submit'
          value='Submit'
          onClick={this.submitNumber}></input>
      </form>
    );
  }
}

export default NumberOfEvents;
