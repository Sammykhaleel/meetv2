import React, { Component } from 'react';

class Event extends Component {
  state = {
    show: 'hide',
  };
  showDetails = () => {
    if (this.state.show === 'show') {
      this.setState({ show: 'hide' });
    } else {
      this.setState({ show: 'show' });
    }
  };

  render() {
    return (
      <div>
        <div className='summary'>
          <h1></h1>
        </div>
        <div className='eventInfo_collapsed'>
          <span className='startDateTime'></span>
          <span className='location'></span>
        </div>
        <div className={`detailInfo ${this.state.show}`}>
          <h2>About event:</h2>
          <a className='eventLink' href='#'>
            See details on Google Calender
          </a>
          <div className='description'></div>
        </div>
        <div className='showDetails' onClick={this.showDetails}>
          <button>show details</button>
        </div>
      </div>
    );
  }
}

export default Event;
