import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.className = null;
  }
  getStyle = () => {
    return {
      color: this.color,
    };
  };
  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()} className={this.className}>
          {this.props.text}
        </p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.className = 'info';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.className = 'error';
  }
  getStyle = () => {
    return {
      color: this.color,
      fontWeight: '600',
    };
  };
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
    this.className = 'warning';
  }
  getStyle = () => {
    return {
      color: this.color,
      fontWeight: '600',
      fontSize: '180px',
    };
  };
}

export { InfoAlert, ErrorAlert, WarningAlert };
