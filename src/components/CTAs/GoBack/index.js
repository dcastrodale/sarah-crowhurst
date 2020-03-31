import React, { Component } from 'react';
import './goback.scss';

const handleGoBack = event => {
  event.preventDefault();
  window.history.back();
}

// We need to check for the window object in componentDidMount so that it can render properly on the server
// as there is no window object on the server at build
export default class GoBack extends Component {
  constructor() {
    super();
    this.state = {
      historyAvailable: false
    }
  }

  componentDidMount() {
    if (window && window.history) {
      this.setState({
        historyAvailable: true
      })
    }
  }

  render() {
    return this.state.historyAvailable ?
      (
        <div className="go-back cta cta--dark">
          <button
            href="#"
            onClick={event => handleGoBack(event)}
          >
            &lt; Go back
          </button>
        </div>
      ) :
      null;
  }
}