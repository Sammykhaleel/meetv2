import React, { Component } from 'react';

class Event extends Component {
  state = {
    show: 'display-none',
    showButton: 'show details',
  };
  showDetails = () => {
    if (this.state.show === 'show') {
      this.setState({ show: 'display-none', showButton: 'show details' });
    } else {
      this.setState({ show: 'show', showButton: 'hide details' });
    }
  };

  render() {
    const event = this.props.event;
    return (
      <div className='event'>
        <div className='summary'>
          <h1>{event.summary}</h1>
        </div>
        <div className='eventInfo_collapsed'>
          <span className='startDateTime'>
            {event.start.dateTime} ({event.start.timeZone} Standard Time)
          </span>
          <br />
          <span className='location'>
            @{event.summary} | {event.location}
          </span>
        </div>
        <div className={`detailInfo ${this.state.show}`}>
          <h2>About event:</h2>
          <div className='description'>{event.description}</div>
          <a
            className='eventLink'
            target='_blank'
            rel='noreferrer'
            href={event.htmlLink}>
            See details on Google Calender
          </a>
        </div>
        <div>
          <button
            className='showDetails'
            onClick={this.showDetails}
            color='primary'
            variant='contained'>
            {this.state.showButton}
          </button>
        </div>
      </div>
    );
  }
}

export default Event;
